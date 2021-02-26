import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { useHistory } from "react-router-dom";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [error, setError] = useState(null);

  const [processing, setProcessing] = useState(null);
  const [disabled, setDisabled] = useState(null);

  const [succeeded, setSucceeded] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    //generate the special stripe secret from the backend
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`, //depend in the curriency, study yours
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("client secret >>> ", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation from stripe
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="paymentContainer">
        <div className="paymentSection">
          <div className="paymentAddress">
            <h3>Delivery Address</h3>
          </div>
          <div className="paymentAddress">
            <p>{user?.email}</p>
            <p>{user?.email}</p>
            <p>{user?.email}</p>
          </div>
          <div className="reviewItems"></div>
        </div>
        <div className="paymentSection">
          {basket?.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          <div className="paymentReview"></div>{" "}
        </div>{" "}
        <div className="paymentSection">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="paymentPriceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? "Processing" : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
