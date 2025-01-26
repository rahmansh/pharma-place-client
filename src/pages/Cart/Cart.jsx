import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Cart = () => {
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    // console.log(cart);

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                // console.log(res)
                refetch();
            })
    }

    const handleIncrease = (item) => {
        console.log(item)
        axiosSecure.get(`/carts?email=${user.email}&medicineName=${item.name}`)
            .then(res => {
                const existingItem = res.data[0];
                if (res.data.length > 0) {
                    axiosSecure.patch(`/carts/${existingItem._id}`, {
                        orderQuantity: existingItem.orderQuantity + 1,
                    })
                        .then((res) => {
                            console.log("Quantity updated: ", res.data)
                            refetch();
                        })
                        .catch((err) => console.error("Error updating quantity: ", err))
                }
            })
            .catch((err) => console.error("Error fetching cart items: ", err))
    }
    const handleDecrease = (item) => {
        console.log(item)
        axiosSecure.get(`/carts?email=${user.email}&medicineName=${item.name}`)
            .then(res => {
                const existingItem = res.data[0];
                if (res.data.length > 0) {
                    axiosSecure.patch(`/carts/${existingItem._id}`, {
                        orderQuantity: existingItem.orderQuantity - 1,
                    })
                        .then((res) => {
                            console.log("Quantity updated: ", res.data)
                            refetch();
                        })
                        .catch((err) => console.error("Error updating quantity: ", err))
                }
            })
            .catch((err) => console.error("Error fetching cart items: ", err))
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Medicine Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Order Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.company}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleIncrease(item)} className="btn">+</button>
                                    <span className="px-3">{item.orderQuantity}</span>
                                    <button
                                        onClick={() => handleDecrease(item)}
                                        className="btn">-</button>
                                </td>
                                <td><button onClick={() => handleDelete(item._id)} className="btn btn-xs">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;