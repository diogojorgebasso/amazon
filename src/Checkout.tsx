import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import Product from "./Product";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkoutItens">
        <h2 id="checkoutTitle">
          Seu carrinho de compras da Amazon está vazio.
        </h2>
        {basket?.map((item, index) => (
          <Product
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
