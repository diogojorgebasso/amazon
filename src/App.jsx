import "./App.css";
import Header from "./Header";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/">
            <Header />

            {/*Make sure it's the last one*/}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
