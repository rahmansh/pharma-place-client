
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';




import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const DiscountProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: products } = useQuery({
        queryKey: ["discounted-product"],
        queryFn: async () => {
            const res = await axiosPublic.get("/medicines/discount");
            return res.data.data;
        }
    })

    return (
        <div className="text-center text-3xl mt-12 mb-20">
            <h1 className='mt-20 mb-10 font-bold'>Discounted Products</h1>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    style={{ height: '600px' }}
                >
                    {
                        products?.map(product => <div key={product._id}>
                            <SwiperSlide>
                                <img src={product.image} alt="" className="w-full h-full object-cover rounded-lg" />

                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                                    <h3 className="text-3xl font-bold">{product.name}</h3>
                                    <p className="text-lg">Discount: {product.discount}%</p>
                                </div>
                            </SwiperSlide>
                        </div>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default DiscountProducts;