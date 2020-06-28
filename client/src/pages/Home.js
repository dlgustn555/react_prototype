import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Home.js</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
