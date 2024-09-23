import React from "react";
// NOTE: React Router handles clicks on any Link component 
//   so that the page willl not post back.
import { Link } from "react-router-dom";

// NOTE: Bootstrap.
const HomePage = () => (
  <div className="jumbotron">
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

// Functional component.
export default HomePage;
