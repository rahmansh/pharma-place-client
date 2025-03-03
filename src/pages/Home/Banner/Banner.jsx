// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const Banner = () => {
    const axiosPublic = useAxiosPublic()

    const { data: slides } = useQuery({
        queryKey: ['medicines-slider'],
        queryFn: async () => {
            const res = await axiosPublic.get("/medicines/slider")
            return res.data;
        }
    })

    // console.log(slides)

    return (
        <div className=''>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" style={{ height: '400px' }}>
                {slides?.map((slide) =>
                    <SwiperSlide key={slide._id}>
                        <img src={slide.image} alt="Medicine" className="w-full h-auto object-cover" />
                    </SwiperSlide>)}
            </Swiper>
        </div>
    );
};

export default Banner;