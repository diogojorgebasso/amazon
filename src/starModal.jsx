import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

<div className="numberRatings">10</div>;

export default function StarModal({ rating }) {
  //rating:Number

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null); //initialize close

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 200);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={{ margin: "auto" }}>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div style={{ display: "flex" }}>
          <div className="stars">
            {[...Array(rating)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
          <div className="numberStars">10</div> {/*Get from the backend */}
        </div>
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>Unique evaluations graph</Typography>
      </Popover>
    </div>
  );
}
