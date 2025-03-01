import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const AskAdvertisement = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: medicines, refetch } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adversitement-status/${user.email}`);
            return res.data;
        }
    });

    const handleSelect = async (id, value) => {
        // change status
        if (value === "requested") {
            const response = await axiosSecure.patch(`advertisement-request/${id}`);
            if (response.data.modifiedCount > 0) {
                refetch();
            }
        }
    }



    return (
        <div>
            <h1 className="text-center text-3xl mb-4">Ask For Advertisement</h1>
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
                            medicines?.map((medicine, index) => {
                                return (
                                    <tr key={medicine._id}>
                                        <th>{index + 1}</th>
                                        <td>{medicine.name}</td>
                                        <td>{medicine.company}</td>
                                        <td>{medicine.price}</td>
                                        <td>
                                            <select
                                                disabled={medicine.sliderStatus === "requested"}
                                                className="select select-bordered"
                                                value={medicine.sliderStatus || "not-being-used"}
                                                onChange={(e) => handleSelect(medicine._id, e.target.value)}
                                            >
                                                <option value="not-being-used">Not Being Used</option>
                                                <option disabled={medicine.sliderStatus === "requested"} value="requested">{medicine.sliderStatus === "requested" ? "Requested" : "Request For Advertisement"}</option>
                                            </select>
                                        </td>

                                    </tr>
                                )
                            }


                            )
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AskAdvertisement;