import { useState } from "react";
import { IFaq } from "./dummyFAQ";
export default function OnClickAccordion({ id, question, answer }: IFaq) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div
      className={`border-2 rounded-xl p-3 w-1/3 space-y-4 border-[#bc85de] ${
        show && "bg-[#f1ecfb]"
      }`}
    >
      <div className="relative flex items-center">
        <h1 className="text-2xl w-1/5 text-gray-500">{id}</h1>
        <p className="w-4/5 font-bold">{question}</p>
        <button className="absolute right-0" onClick={() => setShow(!show)}>
          {show ? (
            <div className="px-2 text-xl border rounded-lg bg-[#a254d0] text-white">
              -
            </div>
          ) : (
            <div className="text-xl">+</div>
          )}
        </button>
      </div>
      {show ? <p className="w-4/5 mx-auto text-justify">{answer}</p> : ""}
    </div>
  );
}
