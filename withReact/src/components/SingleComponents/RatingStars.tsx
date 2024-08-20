function RatingStars() {
    const star= 4.3;
    const ratingStar = Array.from({length: 5}, (_, index) => {
        const number = index + 0.5;
        return(
            <span key={index}>
                {star >= index + 1 ? "⭐" : star >= number ? "★" : "☆"}
            </span>
        )

    });
  return (
    <div>
        <div>{ratingStar}</div>
        <h3>Rating Stars:</h3>
    </div>
  )
}

export default RatingStars

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