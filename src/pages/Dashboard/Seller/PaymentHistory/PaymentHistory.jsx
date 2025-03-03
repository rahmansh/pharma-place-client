import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data = [] } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/medicines-by-seller?email=${user.email}&role=Seller`)
            return res.data;
        }
    });

    // console.log(data)
    return (
        <div>
            <h1 className="text-3xl text-center">Seller Payment History</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {data?.map((item, index) => (<tr key={`${item.email}-${index}`}>
                            <th>{index + 1}</th>
                            <td>{item.email}</td>
                            <td>{item.price}</td>
                            <td>{item.status}</td>
                        </tr>))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;