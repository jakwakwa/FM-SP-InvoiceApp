import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "./App.css";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetail from "./pages/InvoiceDetail";
import Modal from "./components/Modal";
import Nav from "./components/Nav";
import Counter from "./components/Counter";
interface AppProps {}

function App({}: AppProps) {
  // Create the count state.

  // Create the counter (+1 every second).

  // Return the App component.
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="MainPageHeader">
          <Switch>
            <Route path="/details/:invoiceId">
              <InvoiceDetail />
            </Route>
            <Route path="/">
              <InvoiceList />
            </Route>
          </Switch>

          <Modal />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
