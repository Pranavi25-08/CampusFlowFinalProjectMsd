import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div className="content">Loading...</div>;
  }

  return (
    <div className="content">
      <h2>My Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>University:</strong> Vignan University</p>
    </div>
  );
};

export default Profile;
