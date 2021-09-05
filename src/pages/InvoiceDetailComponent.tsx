import * as React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DetailsItems from '../components/DetailsItems';
import type { Invoices } from '../types/invoices';
interface RootState {
  invoices: Invoices;
}
const InvoiceDetailComponent = (): JSX.Element => {
  const invoices = useSelector((state: RootState) => state.invoices.data);
  const match: {
    params: {
      invoiceId: string;
    };
  } = useRouteMatch();

  const invoiceSelected = invoices.find(
    (el) => match.params.invoiceId === el.id,
  );

  if (invoiceSelected === undefined) {
    return;
  }
  const {
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = invoiceSelected;

  return (
    <>
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <Link to="/" style={{ textAlign: 'left', textDecoration: 'none' }}>
          {' '}
          {`<  Go Back`}{' '}
        </Link>
      </div>
      <div
        style={{
          marginBottom: '40px',
          padding: '0px 32px',
          display: 'flex',
          //flexDirection: 'row',

          alignItems: 'center',
          //boxSizing: 'border-box',
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)',
          borderRadius: '8px',
          height: '88px',
        }}
      >
        <div>
          <span
            className="Status-Box--label"
            style={{
              display: 'inline-block',
            }}
          >
            Status:
          </span>
          <span
            className="Status-Box--pending"
            style={{
              display: 'inline-block',
            }}
          >
            {status}
          </span>
        </div>
        <div className="buttons--large push">
          <button
            style={{
              background: '#F9FAFE',
              color: '#7E88C3',
            }}
          >
            Edit
          </button>
          <button
            style={{
              background: '#EC5757',
              color: 'white',
            }}
          >
            Delete
          </button>
          <button
            style={{
              background: '#7f72b3',
              color: 'white',
            }}
          >
            Mark as paid
          </button>
        </div>
      </div>

      <div
        style={{
          marginBottom: '100px',
          padding: '48px',
          background: '#FFFFFF',
          boxShadow: '0px 10px 10px -10px rgba(72, 84, 159, 0.100397)',
          borderRadius: '8px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',

            marginBottom: '10px',
          }}
        >
          <div className="invoiceDocHeader" style={{ textAlign: 'left' }}>
            <h2>{clientName}</h2>
            <h3>{id}</h3>
            <h4>{description}</h4>
          </div>

          <div className="invoiceDocHeader" style={{ textAlign: 'right' }}>
            <h4 style={{ width: '200px', lineHeight: '18px' }}>
              {senderAddress.street}
              <br />
              {senderAddress.city} <br />
              {senderAddress.postCode}
              <br />
              {senderAddress.country}
            </h4>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            textAlign: 'left',
          }}
        >
          <div className="invoiceDetailContent">
            <h4>Invoice Date</h4>
            <p>{createdAt}</p>
            <h4>Payment Due</h4>
            <p>{paymentDue}</p>
            <h4>Payment Terms</h4>
            <p>{paymentTerms}</p>
          </div>
          <div className="invoiceDetailContent">
            <h4>Bill To:</h4>
            <p>
              {clientAddress.street}
              <br />
              {clientAddress.city} <br />
              {clientAddress.postCode}
              <br />
              {clientAddress.country}
            </p>
          </div>
          <div className="invoiceDetailContent">
            <h4>Sent To:</h4>
            <p>{clientEmail}</p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: '20px 0 0 0',
            backgroundColor: '#F9FAFE',
            borderRadius: '8px',
            margin: '0 auto',
            marginTop: '50px',
            overflow: 'hidden',
          }}
        >
          <div
            className="invoiceHeader"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px 32px 20px 32px',
              textAlign: 'right',
            }}
          >
            <div style={{ textAlign: 'left', width: '50%' }}>Item Name</div>
            <div style={{ width: '10%' }}>Qty</div>
            <div style={{ width: '20%' }}>Price</div>
            <div style={{ width: '20%' }}>Total</div>
          </div>
          {items.map((invoice) => (
            <DetailsItems
              key={id}
              name={invoice.name}
              quantity={invoice.quantity}
              price={invoice.price}
              total={invoice.total}
            />
          ))}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#373B53',
              color: 'white',
              padding: '0 32px',
              height: '80px',
            }}
          >
            <div>Amount Due</div>
            <div
              className="push"
              style={{
                fontWeight: 'bold',
                fontSize: '24px',
                lineHeight: '32px',
                textAlign: 'right',
                letterSpacing: '-0.5px',
              }}
            >
              £ {total}
            </div>
          </div>

          {/*Edit invoice end */}
        </div>
      </div>
    </>
  );
};
export default InvoiceDetailComponent;
