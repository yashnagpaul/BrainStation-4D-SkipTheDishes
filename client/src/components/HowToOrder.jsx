import React from "react";
import callIcon from "../assets/phone.svg";
import messageIcon from "../assets/comment.svg";
// import { Link } from "react-router-dom";

export default function HowToOrder() {
  return (
    <div className="how-to-order">
      <section className="how-to-order__left-side">
        <img />
        <h3>Please enter your information below.</h3>
        <input
          className="how-to-order__text-input"
          type="text"
          placeholder="Name"
        ></input>
        <input
          className="how-to-order__text-input"
          type="text"
          placeholder="Address"
        ></input>
        <input
          className="how-to-order__text-input"
          type="text"
          placeholder="Phone Number"
        ></input>
      </section>

      <section className="how-to-order__right-side">
        <img />
        <h3>
          Please select an option below and someone can help you place your
          order.
        </h3>
        <div className="how-to-order__icon-container">
          <a href="tel:123-456-7890">
            <div className="how-to-order__call-btn">
              <img className="how-to-order__icon" src={callIcon} alt="" />
              Call
            </div>
          </a>
          <a href="#chatSection">
            <div className="how-to-order__icon">
              <img className="how-to-order__icon" src={messageIcon} alt="" />
              Chat
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
