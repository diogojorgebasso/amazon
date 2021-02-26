import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
let logo = require("./logo.png");
export default function Header() {
  const [{ basket, user }] = useStateValue();
  function showAlert() {
    alert("You are disconnected");
  }
  function handleSign() {
    if (user) {
      auth.signOut();
      showAlert();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img className="headerLogo" src={logo} alt="Amazon Logo" />
      </Link>
      <div className="headerLocation">
        <LocationOnIcon />
        <div className="headerOption">
          <span className="HeaderTextUp">Hello</span>
          <span className="HeaderTextDown">Select Address</span>
        </div>
      </div>
      <div className="headerSearch">
        <input
          type="text"
          placeholder="Type here..."
          className="headerSearchInput"
        />
        <SearchIcon className="headerSearchIcon" />
      </div>
      <div className="headerNav">
        <Link to={!user && "/login"}>
          <div onClick={handleSign} className="headerOption">
            <span className="HeaderTextUp">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="HeaderTextDown">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="headerOption">
          <span className="HeaderTextUp">Return</span>
          <span className="HeaderTextDown">&amp; orders</span>
        </div>
        <Link to="/orders">
          <div className="headerOption">
            <span className="HeaderTextUp">Your</span>
            <span className="HeaderTextDown">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="headerOptionBasket">
            <AddShoppingCartIcon />
            <span className="HeaderTextDown HeaderBasketCart">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
