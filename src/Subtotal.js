import React from "react";
import CurrencyFormat from "react-currency-format";
//import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./StateProvider";
import { GetBasketTotal } from "./reducer";
import("./Subtotal.css");
export default function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length}{" "}
              {basket?.length !== 0 ? "items" : "item"}
              ): <strong>{value}</strong>
            </p>
            <small className="subtotalGift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={GetBasketTotal(basket)} // Part of the homework
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
