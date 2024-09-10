// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Freemode() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="w-full h-full m-7"
      >
        <SwiperSlide className='w-32 h-28 border'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 2</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 3</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 4</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 5</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 6</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 7</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 8</SwiperSlide>
        <SwiperSlide className='w-32 h-28 border'>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}