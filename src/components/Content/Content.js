import React from "react";
import "./Content.css";

const Content = () => {
  const updatesArr = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const updates = updatesArr.map((update) => <li>{update}</li>);

  return (
    <div className="card--text">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>{updates}</ul>
    </div>
  );
};

export default Content;
