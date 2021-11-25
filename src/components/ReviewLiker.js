import { patchLikesByReviewId } from "../utils/apiCalls";
import { useState } from "react";


const ReviewLiker = ({ review_id, likes }) => {

  const [likeChange, setLikeChange] = useState(0);

  const handleClickAdd = () => {
    setLikeChange((prevLikes) => prevLikes + 1);
    patchLikesByReviewId(review_id, 1);
  }

  const handleClickDelete = () => {
    setLikeChange((prevLikes) => prevLikes - 1);
    patchLikesByReviewId(review_id, -1);
  }

  return (
    <section className="likes-section">
      Review Rating: {likes + likeChange}
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