import { useEffect, useState } from "react";

function ScrollingProgress() {
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
      <div className={`h-2 w-full fixed top-0 `}>
        <div
          className="h-full bg-green-800"
          style={{ width: `${scroll}%` }}
        ></div>
      </div>

      <div className="font-bold top-4 fixed">
        <div className="flex justify-end bg-slate-100 p-1">
          Scroll Value = {scroll}%
        </div>
      </div>
    </div>
  );
}

export default ScrollingProgress;
