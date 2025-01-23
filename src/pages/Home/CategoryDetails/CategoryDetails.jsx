import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CategoryDetails = () => {
    const [category, setCategory] = useState([]);
    const { details } = useParams();
    const { medicines } = category;

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/category/${details}`)
            .then(res => {
                setCategory(res.data)
            })
    }, [])


    return (
        <div>
            <h1>Category Details: {details}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Medicine Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Add To Cart</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            medicines?.map((medicine, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{medicine.name}</td>
                                <td>{medicine.company}</td>
                                <td>{medicine.price}</td>
                                <td><button className="btn btn-xs">Add</button></td>
                                <td><button className="btn btn-xs">Details</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryDetails;