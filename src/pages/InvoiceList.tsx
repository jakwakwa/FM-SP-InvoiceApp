import React from 'react';
import InvoiceRow from '../components/InvoiceRow';
import { useSelector } from 'react-redux';
import type { Invoices, InvoiceDetail } from '../types/invoices';

const InvoiceList = (): JSX.Element => {
  const invoices: InvoiceDetail[] = useSelector(
    (state: { invoices: Invoices }) => state.invoices.data,
  );

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

          <p>There are 0 total invoices</p>
        </div>
        <div className="buttons--large push">
          <div style={{ marginRight: '40px' }}>Filter by Tag</div>
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
          {invoices.map(
            (invoice): JSX.Element => (
              <InvoiceRow
                key={invoice.id}
                invoiceNr={invoice.id}
                invoiceDate={invoice.createdAt}
                name={invoice.clientName}
                amount={invoice.total}
                status={invoice.status}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
};

export default InvoiceList;
