import { patchRatingByReviewId } from "../utils/apiCalls";
import { useState } from "react";


const ReviewLiker = ({ review_id, rating }) => {

  const [ratingChange, setRatingChange] = useState(0);

  const handleClickAdd = () => {
    setRatingChange((prevRating) => prevRating + 1);
    patchRatingByReviewId(review_id, 1);
  }

  const handleClickDelete = () => {
    setRatingChange((prevRating) => prevRating - 1);
    patchRatingByReviewId(review_id, -1);
  }

  return (
    <section className="Rating-section">
      Review Rating: {rating + ratingChange}
      <button className="like-button" onClick={handleClickAdd}>
        Like
      </button>
      <button className="dislike-button" onClick={handleClickDelete}>
        Dislike
      </button>
    </ section>
  )

}

export default ReviewLiker;