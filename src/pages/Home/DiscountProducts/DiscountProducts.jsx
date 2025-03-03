
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';




import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const DiscountProducts = () => {

    const axiosPublic = useAxiosPublic();

    const { data: products, isLoading } = useQuery({
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
                {
                    products?.length > 0 ? (
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
                                products?.map(product =>
                                    <SwiperSlide key={product._id}>
                                        <img src={product.image} alt="" className="w-full h-full object-cover rounded-lg" />

                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                                            <h3 className="text-xl sm:text-xxl md:text-2xl font-bold">{product.name}</h3>
                                            <p className="text-lg sm:text-base md:text-lg">Discount: {product.discount}%</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    ) : <>
                        {
                            !isLoading && <p className="text-lg text-gray-500">No Discount Available Currently</p>
                        }
                    </>
                }
            </div>
        </div>
    );
};

export default DiscountProducts;