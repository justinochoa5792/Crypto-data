import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="homepage">
      <h2>Track your Crypto Currency</h2>
      <button className="btn">
        <Link to="/list">List of Currency</Link>
      </button>
      <button className="btn">
        <Link to="/charts">Currency Chart </Link>
      </button>
    </div>
  );
};

export default Home;
