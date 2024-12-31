import Freemode from "./FreeMode";
import SlidesPerGroup from "./SlidesPerGroup";
import SlidesPerView from "./SlidesPerView";
import CarouselThreeD from "./ThreeD-carousel";
import "../App.css";
import "../index.css";

export default function Swiper() {
  return (
    <div className="space-y-8">
      <CarouselThreeD />
      <SlidesPerGroup />
      <SlidesPerView />
      <Freemode />
    </div>
  );
}
