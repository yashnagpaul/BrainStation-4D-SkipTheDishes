import React from "react";
import skipLogo from "../assets/SkipTheDishes_logo.svg";

export default function Header() {
  return (
    <div class="header">
      <img className="header__logo" src={skipLogo} alt="skip logo" />
      <div className="header__menu">
        <div>NEED HELP?</div>
        <div>FR</div>
        <div>LOG IN</div>
      </div>
    </div>
  );
}
