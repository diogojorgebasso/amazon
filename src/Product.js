import React from "react";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import "./Product.css";

export default function Product({ image, title, description, price, rating }) {
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
      <Button variant="contained" color="primary">
        BUY!
      </Button>
    </div>
  );
}
