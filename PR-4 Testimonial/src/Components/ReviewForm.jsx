import { useState } from "react";
import "../styles/ReviewForm.css";

function ReviewForm({ addReview }) {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !description) {
      alert("Please fill all required fields (Name, Rating, Description).");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      profilePic: profilePic || "https://via.placeholder.com/80",
      rating,
      description,
    };

    addReview(newReview);

    setName("");
    setProfilePic("");
    setRating(0);
    setDescription("");
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Profile Picture URL"
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
      />

      {/* Rating Stars */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={rating >= star ? "star filled" : "star"}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        placeholder="Write your review..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ReviewForm;
