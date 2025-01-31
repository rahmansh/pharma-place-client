import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const ManageUsers = () => {
    const { user: currentUser } = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data
        }
    })

    const handleSelect = (id, value) => {
        if (value === 'Admin') {
            axiosSecure.patch(`/users/admin/${id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        console.log("Role Updated")
                    }
                    refetch();
                })
        }
        else if (value === 'Seller') {
            axiosSecure.patch(`/users/seller/${id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        console.log("Role Updated")
                    }
                    refetch();
                })
        }
        else if (value === 'User') {
            axiosSecure.patch(`/user/${id}`)
                .then(res => {
                    if (res.data.modifiedCount > 0) {
                        console.log("Role Updated")
                    }
                    refetch();
                })
        }

    }


    const handleDelete = (id) => {

    }






    return (
        <div>
            <h1 className="text-center">Manage Users</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <select
                                        className="select select-bordered"
                                        value={user.role}
                                        onChange={(e) => handleSelect(user._id, e.target.value)}
                                        disabled={user.email === currentUser.email}
                                    >
                                        <option value="User">User</option>
                                        <option value="Seller">Seller</option>
                                        <option value="Admin">Admin</option>
                                    </select>
                                </td>
                                <td>
                                    <button
                                        disabled={user.email === currentUser.email}
                                        onClick={() => handleDelete(user._id)} className="btn"><FaTrash /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;