import "./App.css";
import Header from "./Header";
import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <h1>Testing</h1>
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            {/*Make sure it's the last one*/}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
