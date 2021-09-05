import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetailComponent from './pages/InvoiceDetailComponent';

import Modal from './components/Modal';
import Nav from './components/Nav';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="MainPageHeader">
          <Switch>
            <Route path="/details/:invoiceId">
              <InvoiceDetailComponent />
            </Route>
            <Route path="/">
              <InvoiceList />
            </Route>
          </Switch>

          <Modal />
        </div>
      </div>
    </Router>
  );
};

export default App;
