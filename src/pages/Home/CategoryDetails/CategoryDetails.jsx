import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoInformationOutline } from "react-icons/io5";

const CategoryDetails = () => {
    const [category, setCategory] = useState([]);
    const [selectedMedicine, setSelectedMedicine] = useState(null);
    const { details } = useParams();
    const modalRef = useRef(null);
    const { medicines } = category;


    const handleDetails = (medicine) => {
        setSelectedMedicine(medicine);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }



    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/category/${details}`)
            .then(res => {
                setCategory(res.data)
            })
    }, [])


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Medicine Name</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Add To Cart</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            medicines?.map((medicine, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{medicine.name}</td>
                                <td>{medicine.company}</td>
                                <td>{medicine.price}</td>
                                <td><button className="btn btn-xs">Add</button></td>
                                <td><button className="text-2xl p-2 w-12 h-12 font-bold" onClick={() => handleDetails(medicine)}>
                                    <IoInformationOutline />
                                </button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Modal */}
            {selectedMedicine && (
                <dialog ref={modalRef} id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={selectedMedicine.image} // Show the selected medicine's image
                                    alt={selectedMedicine.name} // Show the selected medicine's name
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{selectedMedicine.name}</h2>
                                <p>{selectedMedicine.description}</p> {/* Show additional details */}
                                <p>Company: {selectedMedicine.company}</p>
                                <p>Price: ${selectedMedicine.price}</p>
                                <p>Generic Name: {selectedMedicine.genericName}</p>
                                <p>Available Quantity: {selectedMedicine.quantity}</p>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </dialog>
            )}
        </div>
    );
};

export default CategoryDetails;