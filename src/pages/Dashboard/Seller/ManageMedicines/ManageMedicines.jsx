import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageMedicines = () => {
    const [medicines, setMedicines] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(user)

    console.log(medicines)

    useEffect(() => {
        axiosSecure.get(`/medicines/${user.email}`)
            .then(res => setMedicines(res.data))

    }, [axiosSecure, user?.email])


    return (
        <div>
            <h1 className="text-center my-3">Manage Medicines</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item name</th>
                            <th>Generic Name</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            medicines.map((medicine, index) =>
                                <tr key={medicine._id}>
                                    <th>{index + 1}</th>
                                    <td>{medicine.name}</td>
                                    <td>{medicine.genericName}</td>
                                    <td>{medicine.category}</td>
                                    <td>{medicine.company}</td>
                                    <td>{medicine.price}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageMedicines;