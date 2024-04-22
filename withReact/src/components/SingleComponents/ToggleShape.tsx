import { useState } from "react";

export default function ToggleShape() {
  const [circle, setCircle] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center mt-4 h-screen">
      <div
        className={
          circle
            ? "bg-red-700 w-52 h-52 rounded-full"
            : "bg-green-950 w-96 h-72"
        }
      ></div>
      <button onClick={() => setCircle(!circle)} className="p-4 border-2 m-4">Change Shape</button>
    </div>
  );
}
