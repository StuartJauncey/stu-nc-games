import { Link } from "react-router-dom";
import dateModifier from "../utils/functions/dateModifier";

const ReviewCard = ({
  review_id,
  title,
  owner,
  review_body,
  designer,
  review_img_url,
  votes,
  created_at,
  comment_count
}) => {

  const reviewSnipper = (review) => {
    return review.slice(0, 80) + "...";
  }

  return (
    <section className="review-card">
      <h3 className="review-title">{title} <br/> by {owner}</h3>
      <img className="review-image" src={review_img_url} alt={title} />
      <Link className="link" to={`/reviews/${review_id}`}>
        <h4 className="review-body">{reviewSnipper(review_body)}</h4>
      </Link>
      <h3 className="review-votes">Rating: {votes}</h3>
      <h3 className="review-comment-count">Comments: {comment_count}</h3>
      <h3 className="review-date"> Date: {dateModifier(created_at)}</h3>

      
    </section>
  )
}

export default ReviewCard;