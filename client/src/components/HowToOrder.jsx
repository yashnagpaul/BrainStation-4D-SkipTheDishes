import React from "react";
import callIcon from "../assets/phone.svg";
import messageIcon from "../assets/comment.svg";
import { Link } from "react-router-dom";

export default function HowToOrder() {
  return (
    <div className="how-to-order">
      <h1>
        How would you
        <br />
        like to order?
      </h1>
      <div className="how-to-order__icon-container">
        <Link to="/talk">
          <img className="how-to-order__icon" src={callIcon} alt="" />
        </Link>
        <Link to="/chat">
          <img className="how-to-order__icon" src={messageIcon} alt="" />
        </Link>
      </div>
    </div>
  );
}
