import { useState } from "react";
import { IFaq } from "./dummyFAQ";
export default function Accordion({ question, answer }: IFaq) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="border relative p-3 w-1/3">
      <h1>
        {question}
        <button
          className="absolute right-0 text-2xl"
          onClick={() => setShow(!show)}
        >
          {show ? "-" : "+"}
        </button>
      </h1>
      {show ? <p>{answer}</p> : ""}
    </div>
  );
}
