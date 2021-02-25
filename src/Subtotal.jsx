import React from "react";
import CurrencyFormat from "react-currency-format";
import Button from "@material-ui/core/Button";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";
import("./Subtotal.css");
export default function Subtotal() {
  const history = useHistory();
  const [{ basket }] = useStateValue();

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
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R$"}
      />
      <Button
        onClick={(e) => history.push("/payment")}
        variant="contained"
        color="primary"
      >
        Proceed to checkout
      </Button>
    </div>
  );
}
