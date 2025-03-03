import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import DiscountProducts from "../DiscountProducts/DiscountProducts";
import Footer from "../Footer/Footer";
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
            <Footer />
        </div>
    );
};

export default Home;