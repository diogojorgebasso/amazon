import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="paymentContainer">
        <div className="paymentSection">
          <div className="paymentAddress">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <h3>Delivery Address</h3>
          </div>
        </div>
        <div className="paymentSection">
          {" "}
          <div className="paymentReview"></div>{" "}
        </div>{" "}
        <div className="paymentSection">
          <div className="paymentConfirm"></div>
        </div>
      </div>
    </div>
  );
}
