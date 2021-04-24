import React, { useState } from 'react';
import data from './assets/data.json';
import InvoiceRow from './InvoiceRow';

export default function InvoiceList() {
  const [invoices, setInvoices] = useState([...data]);
  return (
    <>
      <div
        style={{
          margin: 0,
          padding: '72px 0px 65px 0px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'left',
        }}
      >
        <div>
          <h1>Invoices</h1>
          <p>There are {`${invoices.length}`} total invoices</p>
        </div>
        <div className="buttons--large push">
          <a style={{ marginRight: '40px' }}>Filter by Tag</a>
          <button
            style={{
              background: '#7f72b3',
              color: 'white',
              paddingLeft: '50px',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                display: 'inline-block',
                borderRadius: '50%',
                height: '32px',
                width: '32px',
                backgroundColor: 'white',
                color: 'purple',
              }}
            ></span>
            New Invoice
          </button>
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: '0px 0 0 0',
            //  backgroundColor: '#F9FAFE',
            margin: '0 auto',
            marginTop: '0px',
            overflow: 'hidden',
          }}
        >
          {invoices.map(invoice => (
            <InvoiceRow
              invoiceNr={invoice.id}
              invoiceDate={invoice.createdAt}
              name={invoice.clientName}
              amount={invoice.total}
              status={invoice.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
