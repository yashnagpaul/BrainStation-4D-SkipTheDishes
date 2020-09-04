import React from "react";
import callIcon from "../assets/phone.svg";
import messageIcon from "../assets/comment.svg";
import { Link } from "react-router-dom";

export default function HowToOrder() {
  return (
    <div className="how-to-order">
      <section className="how-to-order__left-side">
        <div>1</div>
        Enter your information below.
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
        <div>2</div>
        <h3>
          Please select an option below and someone can help you place your
          order.
        </h3>
        <div className="how-to-order__icon-container">
          <Link to="/talk">
            <div className="how-to-order__call-btn">
              <img className="how-to-order__icon" src={callIcon} alt="" />
              Call
            </div>
          </Link>
          <Link to="/talk">
            <div className="how-to-order__icon">
              <img className="how-to-order__icon" src={messageIcon} alt="" />
              Chat
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
