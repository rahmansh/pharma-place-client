import { Link } from "react-router-dom";

const Category = ({ category }) => {
    const { _id, categoryImage, categoryName, numberOfMedicines } = category;




    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={categoryImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{categoryName}</h2>
                    <p>Available Quantity: {numberOfMedicines}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/category/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;