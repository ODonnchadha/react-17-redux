import React from "react";

// No return needed with the arrow syntax.
// Omit the return because it's implied when the 
//   right-hand side is a single expression.
const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries.
    </p>
  </div>
);

// Functional component.
export default AboutPage;
