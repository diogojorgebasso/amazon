import React from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import Button from "@material-ui/core/Button";
import "./Product.css";

export default function Product() {
  return (
    <div className="product">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/61m38wVMbSL._AC_UX679_.jpg"
        alt="RayBan"
      />
      <div className="productInfo">
        <p>The Best Watch!</p>
        <p>asdhas</p>
        <div className="productStars">
          <StarBorderOutlinedIcon />
        </div>
        <p className="productPrice">
          <small>R$</small>
          <strong>19.99</strong>
        </p>
        <p className="productDescount"></p>
      </div>
      <Button variant="contained" color="primary">
        BUY!
      </Button>
    </div>
  );
}
