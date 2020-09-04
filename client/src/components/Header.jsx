import React from "react";
import skipLogo from "../assets/SkipTheDishes_logo.svg";
import qbtn from "../assets/question 1.svg";
import langGlobe from "../assets/Language.svg";
import login from "../assets/Login Icon.svg";
import line from "../assets/Line 4.svg";

export default function Header() {
  return (
    <div class="header">
      <div className="header-left">
        <img className="header__logo" src={skipLogo} alt="skip logo" />
      </div>
      <div className="header__menu">
        <div className="option">
          <img className="qicon" src={qbtn} alt="question" />
          <h5>NEED HELP?</h5>
        </div>
        <div className="option">
          <img className="qicon" src={langGlobe} alt="language" />
          <h5>FR</h5>
        </div>
        <img className="line" src={line} alt="divider" />
        <div className="option">
          <img className="qicon" src={login} alt="login" />
          <h5>LOG IN</h5>
        </div>
      </div>
    </div>
  );
}
