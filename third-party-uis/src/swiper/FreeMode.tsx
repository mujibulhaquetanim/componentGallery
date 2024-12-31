// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

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
        className="w-full h-full mb-3 border border-green-800"
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
