import React from "react";
import "./App.css";
import Toastify from "./Toastify/Toastify";
import AnimationAOS from "./aos/AnimationAOS";
import RangeCalendarComponent from "./NextUI/RangeCalendar";
const App: React.FC = function () {
  return (
    <>
      <h1>Welcome to Third Party UIs</h1>
      <Toastify />
      <AnimationAOS/>
      <RangeCalendarComponent />
    </>
  );
};

export default App;
