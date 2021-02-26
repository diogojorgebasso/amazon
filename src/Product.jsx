import React from "react";
import Button from "@material-ui/core/Button";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarModal from "./StarModal";

export default function Product({
  id,
  image,
  title,
  description,
  price,
  rating,
}) {
  const [, dispatch] = useStateValue();
  //Responsible for adding or remove to basket.
  const ActionBasket = () => {
    //dispatch item into data lake
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        description,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="productInfo">
        <h4>{title}</h4>
        <p className="productDescription">{description}</p>
        <div className="productRating">
          <StarModal rating={rating} />
        </div>
        <div className="productPrice">
          <small>R$</small>
          <h4>{price}</h4>
        </div>
        <div className="productDiscount">
          <span className="ProductOriginalPrice">
            {(price * 1.15).toFixed(2)}
          </span>
          (15%)
        </div>
      </div>
      <Button
        className="buttonProduct"
        onClick={ActionBasket}
        variant="contained"
        color="primary"
      >
        Add to Buy
      </Button>
    </div>
  );
}
