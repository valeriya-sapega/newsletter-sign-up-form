import React from "react";
import "./SubscribeForm.css";

const SubscribeForm = ({
  handleSubsribe,
  handleEmailChange,
  email,
  isValidEmail,
  success,
}) => {
  return (
    <form className="subscribeForm" onSubmit={handleSubsribe}>
      <label htmlFor="email">
        <span>Email Address</span>
        {!isValidEmail && !success ? (
          <span className="err--label">Valid email required</span>
        ) : (
          ""
        )}
      </label>
      <input
        type="email"
        placeholder="email@company.com"
        onChange={handleEmailChange}
        name="email"
        value={email}
        className={!isValidEmail && !success ? "error" : ""}
      />
      <button type="submit">Subscribe to monthly newsletter</button>
    </form>
  );
};

export default SubscribeForm;
