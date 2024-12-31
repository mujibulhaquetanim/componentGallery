// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function SlidesPerGroup() {
  const Images = [
    "https://cdn.magloft.com/github/swiper/images/page-001.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-002.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-003.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-004.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-005.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-006.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-007.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-008.jpg",
    "https://cdn.magloft.com/github/swiper/images/page-009.jpg",
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="swiper w-full h-full relative border border-green-800 mb-3"
      >
        {Images.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img className="w-72 h-52" alt={`Page-00${index + 1}`} src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
