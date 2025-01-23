const Category = ({ category }) => {
    const { _id, categoryImage, categoryName, medicines } =
        category;
    let availableQuantatity = 0;
    medicines.forEach(medicine => availableQuantatity += medicine.quantity);


    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={category.categoryImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{category.categoryName}</h2>
                    <p>Available Quantity: {availableQuantatity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;