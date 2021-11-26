import { patchRatingByReviewId } from "../utils/apiCalls";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";


const ReviewLiker = ({ review_id, rating, owner }) => {

  const [ratingChange, setRatingChange] = useState(0);
  const { user } = useContext(UserContext);

  const handleClickAdd = () => {
    setRatingChange((prevRating) => prevRating + 1);
    patchRatingByReviewId(review_id, 1);
  }

  const handleClickDelete = () => {
    setRatingChange((prevRating) => prevRating - 1);
    patchRatingByReviewId(review_id, -1);
  }

  let isCurrentUser = false;
  if (user.username === owner) {
    isCurrentUser = true;
  }

  return (
    <section className="rating-section">
      Review Rating: {rating + ratingChange}
      <button className="like-button" onClick={handleClickAdd} disabled={isCurrentUser}>
        Like
      </button>
      <button className="dislike-button" onClick={handleClickDelete} disabled={isCurrentUser}>
        Dislike
      </button>
    </ section>
  )

}

export default ReviewLiker;