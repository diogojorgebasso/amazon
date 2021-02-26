import React from "react";
import SideBar from "./SideBar";
import "./SecondaryBar.css";

export default function SecondaryBanner() {
  return (
    <div className="Banner">
      <SideBar></SideBar>
      <div>Your Amazon</div>
      <div>Customer Service</div>
      <div>Best Sellers</div>
    </div>
  );
}
