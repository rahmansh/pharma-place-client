import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useState } from "react";


const ManageBanner = () => {
    const axiosSecure = useAxiosSecure();
    const [selectedValues, setSelectedValues] = useState({});

    const { data: medicines, refetch } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/medicines`);
            return res.data;
        }
    });


    const handleSelectChange = async (id, value) => {
        setSelectedValues((prev) => ({
            ...prev,
            [id]: value,
        }));
        console.log(`Medicine ${id} selected:`, value);

        try {
            const response = await axiosSecure.patch(`/advertisement-status/${id}`, {
                status: value,
            });

            if (response.data.modifiedCount > 0) {
                console.log("Status updated successfully");
                refetch(); // Refresh the data after updating
            } else {
                console.log("No changes were made to the status");
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }

    };



    return (
        <div>
            <h1 className="text-3xl text-center mb-4">Manage Banner Advertisement</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Medicine Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Slider Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicines?.map((medicine) => {
                                if (medicine.sliderStatus) {
                                    return (
                                        <tr key={medicine._id}>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={medicine.image}
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{medicine.name}</td>
                                            <td>{medicine.company}</td>
                                            <td>{medicine.price}</td>
                                            <td>
                                                <select
                                                    onChange={(e) => handleSelectChange(medicine._id, e.target.value)}
                                                    value={selectedValues[medicine._id] || ""}
                                                >
                                                    <option value="">Select an Option</option>
                                                    <option value="add">Add</option>
                                                    <option value="remove">Remove</option>
                                                </select>
                                            </td>

                                        </tr>
                                    )
                                }

                            }


                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageBanner;