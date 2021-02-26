import React, { useState } from "react";
import "./SecondaryBar.css";
import ListIcon from "@material-ui/icons/List";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SecondaryBanner() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Banner">
      <div className="menu">
        <ListIcon color="primary" onClick={handleClick}></ListIcon>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <h3>Your Amazon</h3>
      <h3>Customer Service</h3>
      <h3>Best Sellers</h3>
      <div>
        <h3>Discount for University</h3>
      </div>
    </div>
  );
}
