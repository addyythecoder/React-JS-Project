import React from "react";
import UserProfileCard from "./UserProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <UserProfileCard
        name="Aditya Giri"
        email="giriaditya9422@gmail.com"
        profilePicture=""
        phone="+91 9265655976"
        address="Surat, India"
        bio="A passionate learner who loves coding and exploring new technologies."
        joinedDate="September 2025"
      />
    </div>
  );
}

export default App;