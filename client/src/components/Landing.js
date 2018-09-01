import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Emaily</h1>
      <h4>Collect feedback from your users</h4>
      <div className="card">
        <div className="card-image">
          <img src="https://res.cloudinary.com/drhekjyor/image/upload/v1535799490/samples/cover.jpg" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>
            Send an survey email to all your customers and easily get insights
            into their feedback automatically recorded as soon as they respond.
          </p>
        </div>
        <div className="card-action">
          <a href="/auth/google">Sign up with Google and get a $5 credit</a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
