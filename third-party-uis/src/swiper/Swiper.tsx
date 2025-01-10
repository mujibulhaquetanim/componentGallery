import Freemode from "./FreeMode";
import SlidesPerGroup from "./SlidesPerGroup";
import SlidesPerView from "./SlidesPerView";
import CarouselThreeD from "./ThreeD-carousel";
import "../App.css";
import "../index.css";
import ClientExperienceSection from "./Client-Experiences/ClientExperienceSection";

export default function Swiper() {
  return (
    <div className="space-y-8">
      <CarouselThreeD />
      <ClientExperienceSection />
      <SlidesPerGroup />
      <SlidesPerView />
      <Freemode />
    </div>
  );
}
