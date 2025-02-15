import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
const ManageCategory = () => {
    const { register, handleSubmit } = useForm();
    const axiosSecure = useAxiosSecure();

    const [isOpen, setIsOpen] = useState(false);

    const onSubmit = async (data) => {
        console.log(data);
        axiosSecure.post("/categories", data)
            .then(res => {
                if (res.data.insertedId) {
                    toast.success("Category Added Successfully");
                    setIsOpen(false);
                }
            })
            .catch(err => {
                console.log(err);
            })
    };

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
            <h1 className="text-center text-3xl mb-5">Manage Category</h1>
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
                                    <td><button onClick={() => handleUpdate(category._id)}><FaEdit /></button></td>
                                    <td><button><FaTrash /></button></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

            {isOpen && (
                <div className="modal modal-open" role="dialog">
                    <div className="modal-box text-center">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-2xl font-bold">Add Category</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Category Name */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="text-black">Category Name*</span>
                                        </div>
                                        <input {...register("categoryName")} type="text" placeholder="Category Name" className="input input-bordered w-full bg-white" />
                                    </label>
                                </div>
                                {/* Category Image URL */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="text-black">Category Image URL*</span>
                                        </div>
                                        <input {...register("categoryImage")} type="text" placeholder="Category Image URL" className="input input-bordered w-full bg-white" />
                                    </label>
                                </div>

                                {/* number of medicines */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="text-black">Number of Medicines*</span>
                                        </div>
                                        <input {...register("numberOfMedicines")} type="number" placeholder="Number of Medicines" className="input input-bordered w-full bg-white" />
                                    </label>
                                </div>

                                <input className="btn btn-primary mt-4" value="Add Category" type="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={() => setIsOpen(false)}></div>
                </div>
            )}


            <button className="btn btn-primary mt-4" onClick={() => setIsOpen(true)}>Add Category</button>
        </div>
    );
};

export default ManageCategory;