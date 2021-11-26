import "../css/SingleReview.css"
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
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getReviewById(review_id)
      .then(review => {
        setError(false);
        setLoading(false);
        setReview(review);
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 404) {
          setError("Review does not exist!");
        } else {
          setError("Unknown failure.")
        }
      });
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
    setComment("");
  }

  const handleChange = (event) => {
    setComment(event.target.value);
  }

  const { title, owner, review_body, votes } = review;

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>{isError}</h2>
  
  return (
    <main className="single-review">
      <h3 className="single-review-title">Review of {title} <br/> by {owner}</h3>
      <h3 className="single-review-body">{review_body}</h3>
      <h3 className="single-review-rating">
        <ReviewRater owner={owner} review_id={review_id} rating={votes}/>
      </h3>
      <section className="single-review-comments">
        {comments.map((comment) => {
          return (
            <CommentCard comments={comments} setComments={setComments} key={comment.comment_id} {...comment} />
          )
        })}
        <form className="add-comment-form" onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="add-comment">Add comment as {user.username} </label>
          <input className="input-comment" placeholder="Your comment... be nice!" id="add-comment" name="item-name" type="text" value={comment} onChange={handleChange} required/>
          <button className="add-comment-button" type="submit">Add Comment</button>
        </form>
      </section>
    </main>
  )
}

export default SingleReview;