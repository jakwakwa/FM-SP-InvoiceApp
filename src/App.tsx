import React, { useState, useEffect } from 'react';

import './App.css';
import { InvoiceDetail } from './InvoiceDetail';

import InvoiceForm from './InvoiceForm';
import InvoiceList from './InvoiceList';
import Modal from './Modal';
import Nav from './Nav';
interface AppProps {}

function App({}: AppProps) {
  // Create the count state.

  // Create the counter (+1 every second).

  // Return the App component.
  return (
    <div className="App">
      {/*<InvoiceForm />*/}
      <Nav />
      <div className="MainPageHeader">
        <InvoiceList />

        {/*<InvoiceDetail />*/}
        <Modal />
      </div>
    </div>
  );
}

export default App;
