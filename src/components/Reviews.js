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
    <main>
      <h2>User Reviews</h2>
      <h3>Sort by:</h3>
      <Link to={`/reviews/category/${category}/created_at`}><button>Newest</button></Link>
      <Link to={`/reviews/category/${category}/comment_count`}><button>Comment Count</button></Link>
      <Link to={`/reviews/category/${category}/votes`}><button>Rating</button></Link>
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