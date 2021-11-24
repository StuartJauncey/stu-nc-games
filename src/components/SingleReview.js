import "./SingleReview.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId, getReviewById } from "../utils/apiCalls";
import CommentCard from "./CommentCard";
import ReviewLiker from "./ReviewLiker";

const SingleReview = () => {

  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [review, setReview] = useState({});

  useEffect(() => {
    getReviewById(review_id).then(review => {
      setReview(review);
    })
  }, [review_id]);

  useEffect(() => {
    getCommentsByReviewId(review_id).then(comments => {
      setComments(comments);
    })
  }, [review_id])

  console.log(review.votes);
  const { title, owner, review_body, designer, review_img_url, votes, created_at } = review;
  
  return (
    <main className="single-review">
      <h3 className="single-review-title">{title}</h3>
      <h3 className="single-review-owner">{owner}</h3>
      <h3 className="single-review-body">{review_body}</h3>
      <h3 className="single-review-designer">{designer}</h3>
      <img className="single-review-image" src={review_img_url} alt={title} />
      <h3 className="single-review-votes">
        <ReviewLiker likes={votes}/>
      </h3>
      <h3 className="single-review-date">{created_at}</h3>
      <section className="single-review-comments">
        {comments.map((comment) => {
          return (
            <CommentCard key={comment.comment_id} {...comment} />
          )
        })}
      </section>
    </main>
  )
}

export default SingleReview;