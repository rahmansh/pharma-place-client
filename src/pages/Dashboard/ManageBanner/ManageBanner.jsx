import { useForm } from "react-hook-form"

const ManageBanner = () => {
    const {
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <div>
            <h1 className="text-center my-8">Manage Banner</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between gap-4">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Medicine Name</span>
                            </div>
                            <input {...register("name")} type="text" placeholder="Medicine Name" className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Seller Email</span>
                            </div>
                            <input {...register("email")} type="text" placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <textarea {...register("description")} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </label>
                    </div>
                    <div className="my-5">
                        <div className="label">
                            <span className="label-text">Pick an image</span>
                        </div>
                        <input {...register("image")} type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <div>
                        <button className="btn bg-neutral text-white">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default ManageBanner;