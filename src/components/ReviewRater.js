import { patchRatingByReviewId } from "../utils/apiCalls";
import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";


const ReviewLiker = ({ review_id, rating, owner }) => {

  const [ratingChange, setRatingChange] = useState(0);
  const { user } = useContext(UserContext);
  const [hasVoted, setVoted] = useState(false);

  const handleClickAdd = () => {
    setVoted(true);
    setRatingChange((prevRating) => prevRating + 1);
    patchRatingByReviewId(review_id, 1);
  }
  
  const handleClickDelete = () => {
    setVoted(true);
    setRatingChange((prevRating) => prevRating - 1);
    patchRatingByReviewId(review_id, -1);
  }

  const handleClickUndo = () => {
    setVoted(false);
    setRatingChange((prevRating) => prevRating - ratingChange);
    patchRatingByReviewId(review_id, -ratingChange);
  }
  
  const isDisabled = owner === user.username;
  
  if (hasVoted) {return (
    <div className="review-rating">
      <h3>Thank you for your vote! <br/> New Review Rating: {rating + ratingChange}</h3>
      <button className="undo-button" onClick={handleClickUndo}>Undo</button>
    </div>
    )
  }
  
  return (
    <section className="rating-section">
      Review Rating: {rating + ratingChange}
      <button className="like-button" onClick={handleClickAdd} disabled={isDisabled}>
        Like
      </button>
      <button className="dislike-button" onClick={handleClickDelete} disabled={isDisabled}>
        Dislike
      </button>
    </ section>
  )

}
export default ReviewLiker;