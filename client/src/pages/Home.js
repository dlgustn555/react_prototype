import React from "react";
import { Link } from "react-router-dom";
import { useHomeSotre } from "../conetexts/HomeContext";

import ROUTES from "../constants/routes";

const Home = () => {
  const { name } = useHomeSotre();

  return (
    <>
      <h1>Home.js {name}</h1>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.LAZY_ICON}>Lazy Icon</Link>
        </li>
        <li>
          <Link to={ROUTES.MINIMUM_TIME_VISITING_ALL_POINTS}>
            MINIMUM_TIME_VISITING_ALL_POINTS
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
