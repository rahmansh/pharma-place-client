import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SalesReport = () => {
    const axiosSecure = useAxiosSecure();

    const { data: salesReport } = useQuery({
        queryKey: ['sales-report'],
        queryFn: async () => {
            const res = await axiosSecure.get('/sales-report');
            return res.data;
        }
    });

    console.log(salesReport)

    return (
        <div>
            <h1 className="text-center text-3xl">Sales Report</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Buyer Email</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {salesReport?.map((item, index) => (<tr key={`${item.buyerEmail}-${index}`}>
                            <td>{item.email}</td>
                            <td>{item.price}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default SalesReport;