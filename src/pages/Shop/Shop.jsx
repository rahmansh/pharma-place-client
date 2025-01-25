import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Shop = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [medicines, setMedicines] = useState([]);
    const [selectedMedicine, setSelectedMedicine] = useState(null);


    console.log(medicines)



    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                medicineId: item._id,
                genericName: item.genericName,
                company: item.company,
                category: item.category,
                email: user.email,
                image: item.image,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
            axiosSecure.post("/carts", cartItem)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    const handleInfo = (item) => {
        setSelectedMedicine(item);
        document.getElementById('my_modal_2').showModal();
        console.log(selectedMedicine)
    }



    useEffect(() => {
        axiosSecure.get(`/medicines`)
            .then((res) => setMedicines(res.data))
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
                            <th>Select</th>
                            <th>Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            medicines?.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <th>{item.name}</th>
                                <td>{item.company}</td>
                                <td>${item.price}</td>
                                <td><button className="btn btn-xs" onClick={() => handleAddToCart(item)}>Add To Cart</button></td>
                                <td><button onClick={() => handleInfo(item)} className="btn btn-xs">!</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            <dialog id="my_modal_2" className="modal">
                {
                    selectedMedicine && (
                        <div className="modal-box">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure>
                                    <img
                                        src={selectedMedicine.image}
                                        alt={selectedMedicine.genericName} />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{selectedMedicine.name}</h2>
                                    <p>Generic Name: {selectedMedicine.genericName}</p>
                                    <p>Company Name: {selectedMedicine.company}</p>
                                    <p>Price: ${selectedMedicine.price}</p>

                                </div>
                            </div>
                        </div>
                    )
                }
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Shop;