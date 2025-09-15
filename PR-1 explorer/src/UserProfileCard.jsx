import React from "react";
import "./UserProfileCard.css";

function UserProfileCard({
  name,
  email,
  profilePicture,
  phone,
  address,
  bio,
  joinedDate,
}) {
  return (
    <div className="profile-card">
      <img src="/picofme.png" alt="pfp" className="profile-img" />

      <h2>{name}</h2>
      <p className="email">{email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Address:</strong> {address}</p>
      <p className="bio">{bio}</p>
      <p><em>Joined: {joinedDate}</em></p>
    </div>
  );
}

export default UserProfileCard;