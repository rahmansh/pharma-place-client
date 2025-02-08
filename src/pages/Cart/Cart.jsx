import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import Swal from 'sweetalert2'

const Cart = () => {
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    // console.log(cart);

    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })

            }
        });




    }

    const handleClearCart = () => {
        if (user && user.email) {
            axiosSecure.delete(`/carts`, {
                params: {
                    email: user.email
                }
            })
                .then((response) => {
                    console.log("Cart cleared: ", response.data)
                    refetch();
                })
                .catch((err) => {
                    console.error("Error clearing cart: ", err);
                })
        }

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
            <div className="flex mt-4 justify-around mb-4">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: </h2>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning">Pay</button>
                </Link>
            </div>
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
            <button className="btn btn-error mt-4" onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;