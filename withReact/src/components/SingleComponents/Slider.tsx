
import { type MouseEvent } from "react";


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