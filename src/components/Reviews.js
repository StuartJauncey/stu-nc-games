import "./Reviews.css";
import { useState, useEffect } from "react";
import { getReviews } from "../utils";
import ReviewCard from "./ReviewCard";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((receivedReviews) => {
      setReviews(receivedReviews);
    })
  }, []);

  return (
    <main>
      <h2>Reviews</h2>
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