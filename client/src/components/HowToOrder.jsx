//Dependencies
import React from "react";
// import { Link } from "react-router-dom";
// Assets
import messagebtn from "../assets/chatButton.svg";
import callbtn from "../assets/call-Button.svg";
import step1 from "../assets/Step 1.svg";
import step2 from "../assets/Step 2.svg";

export default function HowToOrder() {
  return (
    <div className="how-to-order">
      <section className="how-to-order__left-side">
        <div className="steps">
          <img className="how-to-order__steps" src={step1} alt="" />
          <h3>Enter your information below.</h3>
        </div>
        <div className="inputs">
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
        </div>
      </section>

      <section className="how-to-order__right-side">
        <div className="steps">
          <img className="how-to-order__steps" src={step2} alt="" />
          <h3>
            Please select an option below and someone can help you place your
            order.
          </h3>
        </div>
        <div className="how-to-order__icon-container">
          <a href="tel:123-456-7890">
            <div className="how-to-order__btn">
              <img className="how-to-order__icon" src={callIcon} alt="" />
              Call
            </div>
          </a>
          <a href="#chatSection">
            <div className="how-to-btn">
              <img className="how-to-order__icon" src={messageIcon} alt="" />
              Chat
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
