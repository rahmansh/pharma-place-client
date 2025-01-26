import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Category from "../Category/Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/categories')
            .then(res => {
                setCategories(res.data)
            })

    }, [])


    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
            {categories.map((category) => <Category category={category} key={category._id} />)}
        </div>
    );
};

export default Categories;