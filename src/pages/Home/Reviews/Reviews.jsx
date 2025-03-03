import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Pagination, FreeMode } from 'swiper/modules';


const reviews = [
    {
        id: 1,
        name: "John Doe",
        review: "Great service and fast delivery. Highly recommend PharmaPlace!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Sarah Smith",
        review: "The medicines were well-packaged and arrived on time.",
        rating: 4,
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        name: "Michael Johnson",
        review: "Very user-friendly platform and good discounts on medicines!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const Reviews = () => {
    return (
        <div className="my-12 px-5">
            <h2 className="text-3xl font-bold text-center mb-6">⭐ Customer Reviews</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                freeMode={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id} className="border rounded-lg shadow-lg p-6 bg-white">
                        <div className="flex flex-col justify-around">
                            <div className='h-64'>
                                <img src={review.image} alt={review.name} />
                            </div>
                            <h3 className="text-xl font-semibold">{review.name}</h3>
                            <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>

                        </div>
                        <p className="text-gray-600 mt-4">{review.review}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;