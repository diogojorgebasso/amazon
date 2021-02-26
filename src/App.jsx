import "./App.css";
import Header from "./Header";
import React, { useEffect } from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SecondaryBanner from "./banner/SecondaryBanner";
import Orders from "./Orders";
const stripePromise = loadStripe(
  "pk_test_51IOvMXBiilgt3voLm7kvY2GAgsyYVssTyO59sttI2KqgGLTrgPMA5WHox80IXFS7YCuQuo40nXj0qX9JKZiTRocQ00l1cSSkFU"
);
function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            {/*Make sure it's the last one*/}
            <Header />
            <SecondaryBanner></SecondaryBanner>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
