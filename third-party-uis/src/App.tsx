import React from "react";
import "./App.css";
import Toastify from "./Toastify/Toastify";
import AnimationAOS from "./aos/AnimationAOS";
import RangeCalendarComponent from "./NextUI/RangeCalendar";
import TooltipComponent from "./NextUI/TooltipComponent";
import SnippetComponent from "./NextUI/SnippetComponent";
import CardComponent from "./NextUI/CardComponent";
import TextPluginComponent from "./Gsap/TextPluginComponent";
import SlidesPerView from "./swiper/SlidesPerView";
import Freemode from "./swiper/FreeMode";
import SlidesPerGroup from "./swiper/SlidesPerGroup";
import FramerMotion from "./framer-motion/FramerMotion";
const App: React.FC = function () {
  return (
    <>
      <h1>Welcome to Third Party UIs</h1>
      <FramerMotion/>
      <Toastify />
      <AnimationAOS />
      <RangeCalendarComponent />
      <TooltipComponent />
      <SnippetComponent />
      <CardComponent />
      <TextPluginComponent />
      <SlidesPerView />
      <Freemode />
      <SlidesPerGroup/>
    </>
  );
};

export default App;
