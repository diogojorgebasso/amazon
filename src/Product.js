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
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addTobasket = () => {
    console.log("I dont know my name!");
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
        <div className="productDescount">
          De: <span className="ProductOriginalPrice">{price * (1, 15)}</span>{" "}
          (15%)
        </div>
      </div>
      <Button onClick={addTobasket} variant="contained" color="primary">
        Add to Buy
      </Button>
    </div>
  );
}
