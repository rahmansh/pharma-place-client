import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import HealthTips from "../HealthTips/HealthTips";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <DiscountProducts />
            <HealthTips />
        </div>
    );
};

export default Home;