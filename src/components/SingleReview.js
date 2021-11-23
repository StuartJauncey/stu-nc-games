import "./SingleReview.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId, getReviewById } from "../utils";
import CommentCard from "./CommentCard";

const SingleReview = () => {

  const { review_id } = useParams();
  const [comments, setComments] = useState([]);

  console.log(review_id);

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

  console.log(comments);
  const { title, owner, review_body, designer, review_img_url, votes, created_at } = review;
  
  return (
    <main className="single-review">
      <h3>{title}</h3>
      <h3>{owner}</h3>
      <h3>{review_body}</h3>
      <h3>{designer}</h3>
      <img className="single-review-image" src={review_img_url} alt={title} />
      <h3>{votes}</h3>
      <h3>{created_at}</h3>
      <section>
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

// review_id,
//   title,
//   owner,
//   review_body,
//   designer,
//   review_img_url,
//   votes,
//   created_at,
//   comment_count