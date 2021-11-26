import "../css/Reviews.css";
import { useState, useEffect } from "react";
import { getReviews } from "../utils/apiCalls";
import { useParams, Link } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  let { category, sort_by } = useParams();

  if (category === "all") {
    category = null;
  }

  useEffect(() => {
    getReviews(category, sort_by)
      .then((receivedReviews) => {
        setReviews(receivedReviews);
      })
  }, [category, sort_by])

  return (
    <main className="reviews-section">
      <section className="sort-by-section">
        <h2>Sort by:</h2>
        <Link to={`/reviews/category/${category}/created_at`}><button className="sort-by-button">Newest</button></Link>
        <Link to={`/reviews/category/${category}/comment_count`}><button className="sort-by-button">Comments</button></Link>
        <Link to={`/reviews/category/${category}/votes`}><button className="sort-by-button">Rating</button></Link>
      </section>
      <ul className="reviews">
        {reviews.map((review) => {
          return (
            <ReviewCard key={review.review_id} {...review}/>
          )
        })}
      </ul>
    </main>
  )
}

export default Reviews;