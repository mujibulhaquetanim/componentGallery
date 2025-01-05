import { useState } from "react";
import DynamicAccordion from "./DynamicAccordion";
import OnClickAccordion from "./OnClickAccordion";
import { FAQdata } from "./dummyFAQ";

export default function FaqSection() {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-4xl">On Click Accordion</h1>
        {FAQdata.map((value) => {
          return (
            <OnClickAccordion
              key={value.id}
              id={value.id}
              answer={value.answer}
              question={value.question}
            />
          );
        })}
      </div>
      <div className="h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-4xl">Dynamic Accordion</h1>
        {FAQdata.map((value) => {
          return (
            <DynamicAccordion
              key={value.id}
              id={value.id}
              answer={value.answer}
              question={value.question}
              activeId={index === value.id ? value.id : null}
              setActiveId={setIndex}
            />
          );
        })}
      </div>
    </div>
  );
}
