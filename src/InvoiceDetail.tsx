import * as React from 'react';

export const InvoiceDetail = () => {
  return (
    <>
      <div style={{ textAlign: 'left', padding: '20px' }}>
        <a href="/" style={{ textAlign: 'left', textDecoration: 'none' }}>
          {' '}
          {`<  Go Back`}{' '}
        </a>
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
            Pending
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
        {/*Add id */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',

            marginBottom: '10px',
          }}
        >
          <div className="invoiceDocHeader" style={{ textAlign: 'left' }}>
            <h3>#44984984984</h3>
            <h4>Graphic Design</h4>
          </div>

          <div className="invoiceDocHeader" style={{ textAlign: 'right' }}>
            <h4 style={{ width: '200px', lineHeight: '18px' }}>
              19 Union Terrace
              <br />
              London <br />
              E1 3EZ <br />
              United Kingdom
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
            <p>2020-10-20</p>
            <h4>Payment Due</h4>
            <p>2020-10-20</p>
          </div>
          <div className="invoiceDetailContent">
            <h4>Bill To:</h4>
          </div>
          <div className="invoiceDetailContent">
            <h4>Sent To:</h4>
            <p>alexgrim@mail.com</p>
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
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontWeight: 700,
              padding: '20px 32px',
              textAlign: 'right',
            }}
          >
            <div
              style={{
                textAlign: 'left',
                width: '50%',
                color: '#0C0E16',
                paddingBottom: '20px',
              }}
            >
              Banner Design
            </div>
            <div style={{ width: '10%', color: '#7E88C3' }}>1</div>
            <div style={{ width: '20%', color: '#7E88C3' }}>£ 156.00</div>
            <div style={{ width: '20%', color: '#0C0E16' }}>£ 156.00</div>
          </div>
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
              £ 556.00
            </div>
          </div>
          {/*Edit invoice end */}
        </div>
      </div>
    </>
  );
};
