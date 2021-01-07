import React from "react";
import CurrencyFormat from "react-currency-format";
//import { useStateValue } from "./StateProvider";
//import { getBasketTotal } from "./reducer";
//import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
      />
      <Button variant="contained" color="primary">
        Proceed
      </Button>
    </div>
  );
}
