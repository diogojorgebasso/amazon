import React from "react";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import "./Product.css";
import { useStateValue } from "./StateProvider";

export default function Product({
  id,
  image,
  title,
  description,
  price,
  rating,
  addOrRemove,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const ActionBasket = () => {
    console.log(addOrRemove === "true");
    //dispatch item into data lake
    addOrRemove === "true"
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
        <p>{title}</p>
        <p className="productDescription">{description}</p>
        <div className="productRating">
          {[...Array(rating)].map((e, i) => (
            <StarIcon key={i} />
          ))}
        </div>
        <p className="productPrice">
          <small>R$</small>
          <strong>{price}</strong>
        </p>
        <div className="productDiscount">
          De: <span className="ProductOriginalPrice">{price * (1, 15)}</span>{" "}
          (15%)
        </div>
      </div>
      <Button onClick={ActionBasket} variant="contained" color="primary">
        Add to Buy
      </Button>
    </div>
  );
}
