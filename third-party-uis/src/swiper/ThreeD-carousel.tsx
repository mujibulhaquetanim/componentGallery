import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useState } from "react";

export default function CarouselThreeD() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-9.jpg",
  ];

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={8}
      loop={true}
      slidesPerView={"auto"}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 4,
        modifier: 2.5,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="swiper w-full"
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={index}
          className={`mx-1 w-[200px] h-[150px] transition-all ${
            activeIndex === index ? "border-3 border-green-700 rounded-lg" : ""
          }`}
        >
          <img
            className="block w-full h-full object-cover"
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
