import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const ManageCategory = () => {

    const axiosPublic = useAxiosPublic();
    const { data: categories, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: async () => {
            const res = await axiosPublic.get("/categories");
            return res.data;
        }
    })

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>
    }

    return (
        <div>
            <h1>Manage Category</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Category Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            categories.map((category, index) => (
                                <tr key={category._id}>
                                    <th>{index + 1}</th>
                                    <td>{category.categoryName}</td>
                                    <td><button><FaEdit /></button></td>
                                    <td><button><FaTrash /></button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageCategory;