import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const Cart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        axiosSecure.delete(`/carts/${id}`)
            .then(res => {
                console.log(res)
                refetch();
            })
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
                                <td>{item.orderQuantity}</td>
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