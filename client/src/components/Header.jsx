import React from "react";
import skipLogo from "../assets/SkipTheDishes_logo.svg";
import questionMark from "../assets/question-header.svg";
import globeIcon from "../assets/FR-language.svg";
import defaultAvatar from "../assets/login.svg";

export default function Header() {
  return (
    <div class="header">
      <img className="header__logo" src={skipLogo} alt="skip logo" />
      <div className="header__menu">
        <div>
          <img src={questionMark} alt="question mark"></img>NEED HELP?
        </div>
        <div>
          <img src={globeIcon} alt="globe icon"></img>FR
        </div>
        <div>
          <img src={defaultAvatar} alt="log in avatar"></img>LOG IN
        </div>
      </div>
    </div>
  );
}
