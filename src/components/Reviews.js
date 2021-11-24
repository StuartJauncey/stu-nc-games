import "./Reviews.css";
import { useState, useEffect } from "react";
import { getReviews } from "../utils/apiCalls";
import { useParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";

const Reviews = () => {

  const [reviews, setReviews] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    getReviews(category)
      .then((receivedReviews) => {
        setReviews(receivedReviews);
      })
  }, [category])

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