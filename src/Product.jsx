import React from "react";
import Button from "@material-ui/core/Button";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import StarModal from "./starModal";

export default function Product({
  id,
  image,
  title,
  description,
  price,
  rating,
  addItem,
}) {
  const [, dispatch] = useStateValue();
  //Responsible for adding or remove to basket.
  const ActionBasket = () => {
    //dispatch item into data lake
    addItem
      ? dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id,
            title,
            description,
            image,
            price,
            rating,
          },
        })
      : dispatch({
          type: "REMOVE_BASKET",
          item: { id },
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
        <p className="productPrice">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="productDiscount">
          De: <span className="ProductOriginalPrice">{price * (1, 15)}</span>
          (15%)
        </div>
      </div>
      <Button
        className="buttonProduct"
        onClick={ActionBasket}
        variant="contained"
        color="primary"
      >
        {addItem ? "Add to Buy" : "Remove item"}
      </Button>
    </div>
  );
}
