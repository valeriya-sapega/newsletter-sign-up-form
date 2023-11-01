import "./App.css";
import React, { useState } from "react";
import useMediaQuery from "../../useMediaQuery";
import Content from "../Content/Content";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import Success from "../Success/Success";
import illustrationDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../../assets/images/illustration-sign-up-mobile.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [success, setSuccess] = useState(false);

  const isMobile = useMediaQuery("(max-width: 900px)");

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubsribe = (e) => {
    e.preventDefault();
    if (email === "") {
      setIsValidEmail(false);
    } else if (validateEmail(email)) {
      setIsValidEmail(true);
      setSuccess(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const toggle = (e) => {
    e.preventDefault();
    setSuccess(false);
    setIsValidEmail(true);
    setEmail("");
  };

  const isMobileSuccess = () => {
    if (isMobile && !success) {
      return "mobile--first-screen";
    } else if (isMobile && success) {
      return "mobile--success-screen";
    } else {
      return "";
    }
  };

  return (
    <div className={`card ${isMobileSuccess()}`}>
      {!success ? (
        <>
          <div className="card--content">
            <Content />
            <SubscribeForm
              handleEmailChange={handleEmailChange}
              handleSubsribe={handleSubsribe}
              email={email}
              isValidEmail={isValidEmail}
              success={success}
            />
          </div>
          <img
            className="card--img"
            src={isMobile ? illustrationMobile : illustrationDesktop}
            alt="illustration"
          />
        </>
      ) : (
        <>
          <Success toggle={toggle} />
        </>
      )}
    </div>
  );
};

export default App;
