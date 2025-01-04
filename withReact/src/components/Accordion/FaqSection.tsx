import Accordion from "./Accordion";
import { FAQdata } from "./dummyFAQ";

export default function FaqSection() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      {FAQdata.map((value) => {
        return (
          <Accordion
            key={value.id}
            answer={value.answer}
            question={value.question}
          />
        );
      })}
    </div>
  );
}
