import "./SingleReview.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId, getReviewById, postCommentByReviewId } from "../utils/apiCalls";
import { UserContext } from "../contexts/UserContext";
import CommentCard from "./CommentCard";
import ReviewLiker from "./ReviewLiker";

const SingleReview = () => {

  const { review_id } = useParams();
  const [comments, setComments] = useState([]);
  const [review, setReview] = useState({});
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(review_id, user.username, comment);
    postCommentByReviewId(review_id, user.username, comment);
  }

  const handleChange = (event) => {
    setComment(event.target.value);
    console.log(comment);
  }

  const { title, owner, review_body, review_img_url, votes } = review;
  
  return (
    <main className="single-review">
      <h3 className="single-review-title">{title}</h3>
      <h3 className="single-review-owner">{owner}</h3>
      <h3 className="single-review-body">{review_body}</h3>
      <img className="single-review-image" src={review_img_url} alt={title} />
      <h3 className="single-review-votes">
        <ReviewLiker likes={votes}/>
      </h3>
      <section className="single-review-comments">
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <label htmlFor="add-comment">Add Comment as {user.username} </label>
          <input id="add-comment" name="item-name" type="text" value={comment} onChange={handleChange} required/>
          <button type="submit">Add Comment</button>
        </form>
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