import "../styles/ReviewCard.css";

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <img src={review.profilePic} alt="profile" className="profile-pic" />
      <h3>{review.name}</h3>
      <div className="review-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < review.rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
      <p>{review.description}</p>
    </div>
  );
}

export default ReviewCard;
