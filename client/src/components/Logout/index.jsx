import React from "react";
import axios from "axios";
import Auth from '../../helpers/auth';

const Logout = () => {
  const handleLogout = async () => {
    try {

      // Clear the authentication token from local storage or session storage
      Auth.logout('token')
      // Redirect the user to the login page or any other desired page
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed:", error);
      // Handle any error scenarios and provide appropriate feedback to the user
    }
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;