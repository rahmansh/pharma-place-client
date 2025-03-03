import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import HealthTips from "../HealthTips/HealthTips";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <DiscountProducts />
            <HealthTips />
            <Reviews />
        </div>
    );
};

export default Home;