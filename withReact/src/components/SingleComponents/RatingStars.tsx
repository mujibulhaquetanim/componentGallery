import { useState } from "react";

function RatingStars() {
  const [rating, setRating] = useState(0);
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? "⭐" : rating >= number ? "★" : "☆"}
      </span>
    );
  });
    //rating can't be negative and more than 5

  const RatingInput = () => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.value > 5) {
        setRating(5);
      } else if (event.target.value < 0) {
        setRating(0);
      } else {
        setRating(event.target.value);
      }
    };
  };

  
  return (
    <div className="flex flex-col justify-center items-center m-2">
      <div>{ratingStar}</div>
      <h3>Rating Stars:</h3>
      <label htmlFor="rating"></label>
      <input type="text" value={rating} onChange={RatingInput()} className="border" />
        <div className="flex gap-2">
        <div onClick={() => setRating(rating + 1)} className="cursor-pointer border p-2 inline-block">+</div>
        <div onClick={() => setRating(rating - 1)} className="cursor-pointer border p-2 inline-block">-</div>
        </div>
    </div>
  );
}

export default RatingStars;

// let stars = [];
// for (let i = 0; i < 5; i++) {
//   if (i < rating) {
//     stars.push(<img src="https://img.icons8.com/ios/50/000000/star.png" alt="star" key={i} />);
//   } else {
//     stars.push(<img src="https://img.icons8.com/ios/50/000000/star--v1.png" alt="star" key={i} />);
//   }
// }
// return (
//   <div>
//     {stars}
//   </div>
// );
// }
