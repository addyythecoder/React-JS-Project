import { useState } from "react";
import ReviewForm from "./Components/ReviewForm";
import ReviewCard from "./Components/ReviewCard";
import "./App.css";

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="app-container">
      <h1 className="title">Testimonials</h1>
      <ReviewForm addReview={addReview} />
      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default App;
