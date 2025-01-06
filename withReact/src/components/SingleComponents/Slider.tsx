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