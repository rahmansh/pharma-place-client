import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const MedicineCategory = () => {
    const { category } = useParams();
    const [medicines, setMedicines] = useState([]);
    const axiosSecure = useAxiosSecure();

    const selectedCategory = medicines.filter((item) => item.category == category)

    console.log(selectedCategory)


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
                                <td><button className="btn btn-xs">Add To Cart</button></td>
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