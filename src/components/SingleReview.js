import "./SingleReview.css"
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReviewId, getReviewById, postCommentByReviewId } from "../utils/apiCalls";
import { UserContext } from "../contexts/UserContext";
import CommentCard from "./CommentCard";
import ReviewRater from "./ReviewRater";

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
      if (comments) setComments(comments);
    })
  }, [review_id])

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentByReviewId(review_id, user.username, comment)
    .then((commentReceived) =>
      setComments((currentComments) => {
      return [...currentComments, commentReceived];
    }))
    
  }

  const handleChange = (event) => {
    setComment(event.target.value);
  }

  const { title, owner, review_body, votes } = review;
  
  return (
    <main className="single-review">
      <h3 className="single-review-title">Review of {title} <br/> by {owner}</h3>
      <h3 className="single-review-body">{review_body}</h3>
      <h3 className="single-review-rating">
        <ReviewRater review_id={review_id} rating={votes}/>
      </h3>
      <section className="single-review-comments">
        {comments.map((comment) => {
          return (
            <CommentCard comments={comments} setComments={setComments} key={comment.comment_id} {...comment} />
          )
        })}
        <form className="add-comment-form" onSubmit={handleSubmit}>
          <label htmlFor="add-comment">Add Comment as {user.username} </label>
          <input id="add-comment" name="item-name" type="text" value={comment} onChange={handleChange} required/>
          <button type="submit">Add Comment</button>
        </form>
      </section>
    </main>
  )
}

export default SingleReview;