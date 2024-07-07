import React, { useEffect, useState } from "react";
import DummyText from "../SingleComponents/DummyText";

const ScrollingProgress: React.FC = function () {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const WindowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const percentage = (scrollY / (documentHeight - WindowHeight)) * 100;

      console.log(percentage);
      setScroll(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <div className="w-full fixed top-0">
        <div className="h-2 w-full">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
            style={{ width: `${scroll}%` }}
          ></div>
        </div>

        <div className="font-bold">
          <div className="flex justify-end p-1 text-white">
            Scroll Value = {scroll}%
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-96 text-white ">
        Scroll Down 👇🏼 to See the Effect
      </div>
      <DummyText />
    </div>
  );
};

export default ScrollingProgress;
