import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const AskAdvertisement = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: medicines } = useQuery({
        queryKey: ['medicines'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/adversitement-status/${user.email}`);
            return res.data;
        }
    });

    console.log(medicines)


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
                            <th>Generic Name</th>
                            <th>Price</th>
                            <th>Slider Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medicines?.map((medicine, index) => <tr key={medicine._id}>
                                <th>{index + 1}</th>
                                <td>{medicine.name}</td>
                                <td>{medicine.company}</td>
                                <td>{medicine.genericName}</td>
                                <td>{medicine.price}</td>
                                <td>{medicine.sliderStatus !== undefined ? medicine.sliderStatus : "Not Being Used"}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AskAdvertisement;