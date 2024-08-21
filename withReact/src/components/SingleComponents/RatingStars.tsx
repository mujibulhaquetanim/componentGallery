import { useState } from "react";

const RatingInput: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const ratingStar = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span className="text-5xl" key={index}>
        {rating >= index + 1 ? "⭐" : rating >= number ? "★" : "☆"}
      </span>
    );
  });

  const handleRatingChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    // const value = parseFloat(event.target.value);
    // setRating(Math.min(Math.max(value, 0), 5));
    const value = parseFloat(event.target.value);
    if (value > 5) {
      setRating(5);
    } else if (value < 0) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  const handleIncrement = () => {
    setRating((prevRating) => Math.min(prevRating + 0.1, 5));
  };

  const handleDecrement = () => {
    setRating((prevRating) => Math.max(prevRating - 0.1, 0));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-3">
      <div>{ratingStar}</div>
      <h3>Rating: {rating.toFixed(1)}</h3>
      <div className="flex w-1/2 items-center justify-center gap-3">
      <label htmlFor="rating">Rating:</label>
      <input
        type="number"
        id="rating"
        min="0"
        max="5"
        step="0.1"
        onChange={handleRatingChange}
        title="Rating must be between 0 and 5"
        placeholder="Enter rating"
        className="border w-1/6"
      />
      </div>
      <div className="flex gap-2">
        <div
          onClick={handleIncrement}
          className="cursor-pointer border rounded-lg m-auto p-1 inline-block"
        >
          +
        </div>
        <div
          onClick={handleDecrement}
          className="cursor-pointer border rounded-lg m-auto p-1 inline-block"
        >
          -
        </div>
      </div>
    </div>
  );
};

export default RatingInput;
