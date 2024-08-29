import React from "react";
import "./App.css";
import Toastify from "./Toastify/Toastify";
import AnimationAOS from "./aos/AnimationAOS";

const App: React.FC = function () {
  return (
    <>
      <h1>Welcome to Third Party UIs</h1>
      <Toastify />
      <AnimationAOS/>
    </>
  );
};

export default App;
