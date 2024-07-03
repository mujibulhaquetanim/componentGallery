import { useState } from "react";

export default function ToggleShape() {
  const [circle, setCircle] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center mt-4 h-screen gap-2">
      <div className="">
      <div
        className={
          circle
            ? "bg-red-700 w-52 h-52 rounded-full"
            : "bg-green-950 w-96 h-72"
        }
      ></div>
      </div>
      <button onClick={() => setCircle(!circle)} className="p-2 border-2 rounded-xl m-4">Change Shape</button>
    </div>
  );
}
