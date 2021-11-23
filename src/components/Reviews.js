import "./Reviews.css";
import { useState, useEffect } from "react";
import { getReviews, getReviewsByCategory } from "../utils";
import ReviewCard from "./ReviewCard";

const Reviews = ({ categorySelected }) => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if(categorySelected === "all") {
      getReviews().then((receivedReviews) => {
        setReviews(receivedReviews);
      });
    } else {
      getReviewsByCategory(categorySelected).then((receivedReviews) => {
        setReviews(receivedReviews);
      });
    }
  }, [categorySelected]);

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