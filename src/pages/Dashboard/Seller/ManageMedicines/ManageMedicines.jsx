import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";


const image_hosting_key = import.meta.env.VITE_IMAGE_BB;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ManageMedicines = () => {
    const { register, handleSubmit } = useForm();
    const [medicines, setMedicines] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const axiosPublic = useAxiosPublic();

    const [isOpen, setIsOpen] = useState(false)

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })


        if (res.data.success) {
            const medicine = {
                name: data.name,
                genericName: data.genericName,
                price: parseFloat(data.price),
                image: res.data.data.display_url,
                discount: data.discount ? parseFloat(data.discount) : 0,
                addedBy: user.email,
                category: data.category,
                company: data.company
            }

            const medicineRes = await axiosSecure.post("/medicines", medicine)

            if (medicineRes.data.insertedId) {
                toast.success("Data Added");
            }
        }

    };

    useEffect(() => {
        axiosSecure.get(`/medicines/${user.email}`)
            .then(res => setMedicines(res.data))

    }, [axiosSecure, user?.email])


    return (
        <div>
            <h1 className="text-center my-3">Manage Medicines</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Item name</th>
                            <th>Generic Name</th>
                            <th>Category</th>
                            <th>Company</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            medicines.map((medicine, index) =>
                                <tr key={medicine._id}>
                                    <th>{index + 1}</th>
                                    <td>{medicine.name}</td>
                                    <td>{medicine.genericName}</td>
                                    <td>{medicine.category}</td>
                                    <td>{medicine.company}</td>
                                    <td>{medicine.price}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

            {isOpen && (
                <div className="modal modal-open" role="dialog">
                    <div className="modal-box text-center">
                        <div className="max-w-4xl mx-auto">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Medicine Name */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="text-black">Medicine Name*</span>
                                        </div>
                                        <input {...register("name")} type="text" placeholder="Medicine Name" className="input input-bordered w-full bg-white" />
                                    </label>
                                </div>
                                {/* Generic Name */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="text-black">Generic Name*</span>
                                        </div>
                                        <input {...register("genericName")} type="text" placeholder="Generic Name" className="input input-bordered w-full bg-white" />
                                    </label>
                                </div>
                                {/* Description */}
                                <div>
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="text-black">Description</span>
                                        </div>
                                        <input {...register("description")} type="text" placeholder="Description" className="input input-bordered w-full bg-white" />
                                    </label>
                                </div>
                                <div className="flex gap-6 my-4">
                                    {/* Price */}
                                    <div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="text-black">Price</span>
                                            </div>
                                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full bg-white" />
                                        </label>
                                    </div>
                                    {/* Discount */}
                                    <div>
                                        <label className="form-control w-full">
                                            <div className="label">
                                                <span className="text-black">Discount(%)</span>
                                            </div>
                                            <input {...register("discount")} type="number" placeholder="Discount" className="input input-bordered w-full bg-white" />
                                        </label>
                                    </div>

                                </div>
                                <div className="flex gap-6">
                                    {/* Category Dropdown */}
                                    <div className="w-full">
                                        <div className="label">
                                            <span className="text-black">Company*</span>
                                        </div>
                                        <select defaultValue={"default"} {...register("company")} className="select bg-white w-full">
                                            <option value={"default"}>Select Company</option>
                                            <option value="XYZ Pharma">XYZ Pharma</option>
                                            <option value="ABC Pharma">ABC Pharma</option>
                                            <option value="123 Pharma">123 Pharma</option>
                                            <option value="HealthCo">HealthCo</option>
                                            <option value="Wellness Pharma">Wellness Pharma</option>
                                            <option value="NutriPharma">NutriPharma</option>
                                            <option value="SunPharma">SunPharma</option>
                                        </select>
                                    </div>
                                    {/* Company Dropdown */}
                                    <div className="w-full">
                                        <div className="label">
                                            <span className="text-black">Category*</span>
                                        </div>
                                        <select defaultValue={"default"} {...register("category")} className="select bg-white w-full">
                                            <option value={"default"}>Select Category</option>
                                            <option value="Tablets">Tablets</option>
                                            <option value="Syrups">Syrups</option>
                                            <option value="Capsules">Capsules</option>
                                            <option value="Injections">Injections</option>
                                            <option value="Ointments">Ointments</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                {/* image upload */}
                                <div className="my-6">
                                    <input {...register('image')} type="file" className="file-input w-full max-w-xs bg-white" />
                                </div>
                                <input className="btn btn-primary mt-4" value="Add Item" type="submit" />
                            </form>
                        </div>
                    </div>
                    <div className="modal-backdrop" onClick={() => setIsOpen(false)}></div>
                </div>
            )}

            <button onClick={() => setIsOpen(true)} className="btn btn-primary mt-6">Add Medicine</button>
        </div>
    );
};

export default ManageMedicines;