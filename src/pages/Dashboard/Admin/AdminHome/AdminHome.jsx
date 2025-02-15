import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AdminHome = () => {
    const { user } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: stats } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data;
        }
    })


    return (
        <div>
            <h1 className="text-3xl text-center">Revenue</h1>
            <div className="text-center mt-6">
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Users</div>
                        <div className="stat-value">{stats.users}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">{stats.revenue}</div>

                    </div>
                    <div className="stat">
                        <div className="stat-title">Orders</div>
                        <div className="stat-value">{stats.orders}</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;