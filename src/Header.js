import React from "react";
import "./Header.css";
import logo from "./amazonlogo.png";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function Header() {
  return (
    <div className="header">
      <img className="headerLogo" src={logo} alt="Amazon Logo" />
      <div className="headerLocation">
        <LocationOnIcon />
        <div className="headerOption">
          <span className="HeaderTextUp">Hello</span>
          <span className="HeaderTextDown">Select Adress</span>
        </div>
      </div>
      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <div className="headerOption">
          <span className="HeaderTextUp">Hello Guest</span>
          <span className="HeaderTextDown">Sign In</span>
        </div>
        <div className="headerOption">
          <span className="HeaderTextUp">Return</span>
          <span className="HeaderTextDown">& orders</span>
        </div>
        <div className="headerOption">
          <span className="HeaderTextUp">Your</span>
          <span className="HeaderTextDown">Prime</span>
        </div>
        <div className="headerOptionBasket">
          <AddShoppingCartIcon />
          <span className="HeaderTextDown HeaderBasketCart">0</span>
        </div>
      </div>
    </div>
  );
}
