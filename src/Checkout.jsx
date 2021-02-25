import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

export default function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutItens">
        <h3>Hello, {user?.email}!</h3>
        <h2 id="checkoutTitle">Seu carrinho de compras da Amazon:</h2>
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
      </div>
      <div className="checkoutSubtotal">
        <Subtotal />
      </div>
    </div>
  );
}
