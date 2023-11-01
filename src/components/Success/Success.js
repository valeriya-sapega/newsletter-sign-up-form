import React from "react";
import SuccessImg from "../../assets/images/icon-list.svg";
import "./Success.css";

const Success = ({ toggle }) => {
  return (
    <div className="success--content">
      <div className="success--text">
        <img className="success--icon" src={SuccessImg} alt="Success" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="bold-text">ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>

      <button onClick={toggle}>Dismiss message</button>
    </div>
  );
};

export default Success;
