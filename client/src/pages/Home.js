import React from "react";
import { Link } from "react-router-dom";
import { useHomeSotre } from "../conetexts/HomeContext";

const Home = () => {
  const { name } = useHomeSotre();

  return (
    <>
      <h1>Home.js {name}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
