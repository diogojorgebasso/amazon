import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
export default function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutItens">
        <h2 id="checkoutTitle">
          Seu carrinho de compras da Amazon está vazio.
        </h2>
      </div>
      <div className="checkoutSubtotal">
        <Subtotal />
      </div>
    </div>
  );
}
