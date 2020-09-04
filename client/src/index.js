import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import HowToOrder from "./components/HowToOrder";
import Chat from "./components/Chat";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HowToOrder}></Route>
        <Route path="/chat" component={Chat}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
