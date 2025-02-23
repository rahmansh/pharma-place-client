import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SellerHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data = [] } = useQuery({
        queryKey: ['products', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/medicines-by-seller?email=${user.email}&role=Seller`)
            return res.data;
        }
    });

    const { paidTotal, pendingTotal } = data.reduce(
        (totals, item) => {
            if (item.status === 'paid') {
                totals.paidTotal += item.price;
            } else {
                totals.pendingTotal += item.price;
            }
            return totals;
        },
        { paidTotal: 0, pendingTotal: 0 } // Initial values
    );

    return (
        <div>
            <h1 className="text-center text-3xl">Seller Home</h1>
            <div className="text-center mt-6">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Paid Total</div>
                        <div className="stat-value">
                            ${paidTotal}
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Pending Total</div>
                        <div className="stat-value">
                            ${pendingTotal}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerHome;
