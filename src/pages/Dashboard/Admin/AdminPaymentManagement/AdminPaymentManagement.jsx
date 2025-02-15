import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AdminPaymentManagement = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })

    const handleSelect = (id, value) => {
        // change status
        axiosSecure.patch(`/payments/${id}`, { status: value })
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    console.log("Status Updated")
                }
                refetch();
            })
    }






    return (
        <div>
            <h1 className="text-center text-3xl mb-6">Admin Payment Management</h1>
            <div>
                <h2 className="text-3xl text-center mt-5 mb-5">Total Payments: {payments?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Price</th>
                                <th>Transaction Id</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                payments.map((payment, index) => <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>{payment.price}</td>
                                    <td>{payment.transactionId}</td>
                                    <td>
                                        <select
                                            className="select select-bordered"
                                            value={payment.status}
                                            onChange={(e) => handleSelect(payment._id, e.target.value)}
                                            disabled={payment.status === "paid"}
                                        >
                                            <option value="pending">pending</option>
                                            <option value="paid">paid</option>
                                        </select>
                                    </td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminPaymentManagement;