import { type MouseEvent } from "react";
import { useState } from "react";

interface Card {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  tags: string[];
}

interface CarouselButtonProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  direction: "left" | "right";
}

const CarouselButton = ({ onClick, direction }: CarouselButtonProps) => (
  <button
    onClick={onClick}
    className={`absolute z-50 ${
      direction === "left" ? "left-0" : "right-0"
    } text-2xl border rounded-full p-1 m-1 bg-white shadow`}
    aria-label={`${direction === "left" ? "Previous" : "Next"} card`}
    title={`${direction === "left" ? "Previous" : "Next"} card`}
  >
    {direction === "left" ? "←" : "→"}
  </button>
);

const CardContent = ({ card }: { card: Card }) => (
  <>
    <div
      className="w-2/6 h-60 rounded-xl bg-cover bg-center shadow-md border border-gray-300"
      style={{ backgroundImage: `url(${card.image})` }}
    />
    <div className="space-y-2 w-4/6">
      <div>
        <h1 className="text-xl font-bold">{card.name}</h1>
        <p className="text-sm text-gray-500">{card.role}</p>
      </div>
      <p className="text-justify text-sm text-gray-700">&quot;{card.text}&quot;</p>
      <div>
        {card.tags.map((tag) => (
          <button
            key={tag}
            className="rounded-xl border px-3 py-1 m-2 border-slate-700 text-sm"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  </>
);

export default function ClientExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="parent w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="container relative w-2/3 h-96 flex items-center justify-center gap-3 overflow-hidden">
        <CarouselButton onClick={handlePrev} direction="left" />
        <CarouselButton onClick={handleNext} direction="right" />

        {cards.map((card, index) => {
          const isActive = index === currentIndex;
          const isNext = index === (currentIndex + 1) % cards.length;
          const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;

          return (
            <div
              key={card.id}
              className={`absolute w-full h-full flex items-center justify-between gap-14 px-8 transition-transform duration-700 ease-in-out ${
                isActive
                  ? "translate-x-0 opacity-100 z-10"
                  : isNext
                  ? "translate-x-full opacity-0 z-0"
                  : isPrev
                  ? "-translate-x-full opacity-0 z-0"
                  : "opacity-0"
              }`}
            >
              <CardContent card={card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const cards: Card[] = [
  {
    id: 1,
    name: "Author Name 1",
    role: "Founder, Mo",
    image: "/welcome-section/male1.png",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Commodi veniam ut possimus nobis, et veritatis dignissimos 
          ipsa inventore nemo cum.`,
    tags: ["Wedding", "Haldi Night"],
  },
  {
    id: 2,
    name: "Author Name 2",
    role: "Photographer",
    image: "/welcome-section/female1.png",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Nihil minus fugit totam nam incidunt quos dolorem non dicta 
          praesentium.`,
    tags: ["Reception", "Engagement"],
  },
  {
    id: 3,
    name: "Author Name 3",
    role: "Event Planner",
    image: "/welcome-section/female2.png",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Commodi veniam ut possimus nobis, et veritatis dignissimos 
          ipsa inventore nemo cum.`,
    tags: ["Anniversary", "Birthday"],
  },
];