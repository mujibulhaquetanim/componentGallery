import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

export default function SlidesPerView() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-full mb-3"
      >
        {Array.from({ length: 9 }, (_, index) => (
          <SwiperSlide className="w-32 h-28 border" key={index}>
            Slide {index + 1}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
