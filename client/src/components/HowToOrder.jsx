//Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Assets
import messagebtn from "../assets/chatButton.svg";
import callbtn from '../assets/call-Button.svg';
import step1 from '../assets/Step 1.svg';
import step2 from '../assets/Step 2.svg'

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
          <Link to="/talk">
            <div className="how-to-order__btn">
              <img className="how-to-order__icon" src={callbtn} alt="" />
            </div>
          </Link>
          <Link to="/talk">
            <div className="how-to-order__">
              <img className="how-to-order__icon" src={messagebtn} alt="" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
