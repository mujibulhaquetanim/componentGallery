import React from "react";
import "./App.css";
import Toastify from "./Toastify/Toastify";
import AnimationAOS from "./aos/AnimationAOS";
import RangeCalendarComponent from "./NextUI/RangeCalendar";
import TooltipComponent from "./NextUI/TooltipComponent";
import SnippetComponent from "./NextUI/SnippetComponent";
import CardComponent from "./NextUI/CardComponent";
const App: React.FC = function () {
  return (
    <>
      <h1>Welcome to Third Party UIs</h1>
      <Toastify />
      <AnimationAOS/>
      <RangeCalendarComponent />
      <TooltipComponent/>
      <SnippetComponent/>
      <CardComponent/>
    </>
  );
};

export default App;
