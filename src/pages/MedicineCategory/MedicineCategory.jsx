import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MedicineCategory = () => {
    const { user } = useAuth();
    const { category } = useParams();
    const [medicines, setMedicines] = useState([]);
    const axiosSecure = useAxiosSecure();


    // routing
    const navigate = useNavigate();
    const location = useLocation()

    const selectedCategory = medicines.filter((item) => item.category == category)

    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                medicineId: item._id,
                genericName: item.genericName,
                company: item.company,
                category: item.category,
                email: user.email,
                image: item.image,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
            axiosSecure.post("/carts", cartItem)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    useEffect(() => {
        axiosSecure.get(`/medicines`)
            .then((res) => setMedicines(res.data))
    }, [category])

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
                            <th>Select</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedCategory.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <td>{item.company}</td>
                                <td>${item.price}</td>
                                <td><button className="btn btn-xs" onClick={() => handleAddToCart(item)}>Add To Cart</button></td>
                                <td><button className="btn btn-xs">!</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MedicineCategory;