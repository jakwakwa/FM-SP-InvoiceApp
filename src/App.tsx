import React, { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import Illustration from './assets/illustration-empty.svg';
import './App.css';
import Avatar from './assets/image-avatar.jpg';
import Moon from './assets/icon-moon.svg';
interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <div
        className="editForm"
        style={{
          width: '719px',
          padding: '56px',
          position: 'absolute',
          backgroundColor: '#ffffff',
          left: '100px',
        }}
      >
        <form>
          <h2>New Invoice</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h3>Bill From</h3>

            <div>
              <label htmlFor="">Street Address</label>
              <input type="text" name="|" id="|" />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: '0px 0 0 0',
              //  backgroundColor: '#F9FAFE',
              margin: '0 auto',
              marginTop: '0px',
              overflow: 'hidden',
            }}
          >
            <div>
              <label htmlFor="">City</label>
              <input type="text" name="|" id="|" />
            </div>
            <div>
              <label htmlFor="">Post Code</label>
              <input type="text" name="|" id="|" />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <h3>Bill To</h3>
          <label htmlFor="">Client's Name</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Client's Email e.g. email@example.com</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Street Address</label>
          <input type="text" name="" id="" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: '0px 0 0 0',
              //  backgroundColor: '#F9FAFE',
              margin: '0 auto',
              marginTop: '0px',
              overflow: 'hidden',
            }}
          >
            <div>
              <label htmlFor="">City</label>
              <input type="text" name="|" id="|" />
            </div>
            <div>
              <label htmlFor="">Post Code</label>
              <input type="text" name="|" id="|" />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <input type="text" name="" id="" />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: '0px 0 0 0',
              //  backgroundColor: '#F9FAFE',
              margin: '0 auto',
              marginTop: '0px',
              overflow: 'hidden',
            }}
          >
            <div>
              <label htmlFor="">Invoice date</label>
              <select name="" id="">
                <option value="">Net 1 day</option>
                <option value="">Net 7 days</option>
                <option value="">Net 14 days</option>
                <option value="">Net 30 days</option>
              </select>
            </div>
            <div>
              <label htmlFor="">Payment Terms</label>
              <select name="" id="">
                <option value="">Net 1 day</option>
                <option value="">Net 7 days</option>
                <option value="">Net 14 days</option>
                <option value="">Net 30 days</option>
              </select>
            </div>
          </div>

          <label htmlFor="">Project Description</label>
          {/*e.g. Graphic Design Service*/}
          <select>
            <option value="">Item List</option>
          </select>

          <h3>Item List</h3>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              padding: '0px 0 0 0',
              //  backgroundColor: '#F9FAFE',
              margin: '0 auto',
              marginTop: '0px',
              overflow: 'hidden',
            }}
          >
            <div>
              <label htmlFor="">Item Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Qty. </label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Price Total</label>
              <input type="text" />
            </div>
          </div>

          <button
            style={{
              width: '100%',
              height: '48px',
              background: '#F9FAFE',
              borderRadius: '24px',
              margin: '20px 0px',
            }}
          >
            Add New Item
          </button>

          <div className="buttons--large">
            <button>Cancel </button>
            <button
              style={{
                background: '#EC5757',
                color: 'white',
              }}
            >
              Discard
            </button>
            <button
              style={{
                background: '#7f72b3',
                color: 'white',
              }}
            >
              Save as Draft{' '}
            </button>
            <button
              style={{
                background: '#7f72b3',
                color: 'white',
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <div className="nav">
        <div className="navLayout">
          <div className="col col1">
            <div
              style={{
                width: '100%',
                background: '#7C5DFA',
              }}
            >
              <img src={logo} />
            </div>
          </div>
          <div className="col col2">
            <div
              style={{
                width: '100%',
              }}
            >
              <img src={Moon} />
            </div>
          </div>
          <div className="col col3">
            <div>
              <img src={Avatar} />
            </div>
          </div>
        </div>
      </div>
      <div className="MainPageHeader">
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
            <p>There are 5 total invoices</p>
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
            <div
              className="invoiceList"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 32px 20px 32px',
                textAlign: 'right',
              }}
            >
              <div>#RT3080</div>
              <div>Due 19 Aug 2021</div>
              <div>Jensen Huang</div>
              <div>£ 1,800.90</div>
              <div>Paid</div>
              <div>{`>`} </div>
            </div>
            <div
              className="invoiceList"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 32px 20px 32px',
                textAlign: 'right',
              }}
            >
              <div>#RT3080</div>
              <div>Due 19 Aug 2021</div>
              <div>Jensen Huang</div>
              <div>£ 1,800.90</div>
              <div>Paid</div>
              <div>{`>`} </div>
            </div>
            <div
              className="invoiceList"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 32px 20px 32px',
                textAlign: 'right',
              }}
            >
              <div>#RT3080</div>
              <div>Due 19 Aug 2021</div>
              <div>Jensen Huang</div>
              <div>£ 1,800.90</div>
              <div>Paid</div>
              <div>{`>`} </div>
            </div>
            <div
              className="invoiceList"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 32px 20px 32px',
                textAlign: 'right',
              }}
            >
              <div>#RT3080</div>
              <div>Due 19 Aug 2021</div>
              <div>Jensen Huang</div>
              <div>£ 1,800.90</div>
              <div>Paid</div>
              <div>{`>`} </div>
            </div>
            <div
              className="invoiceList"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px 32px 20px 32px',
                textAlign: 'right',
              }}
            >
              <div>#RT3080</div>
              <div>Due 19 Aug 2021</div>
              <div>Jensen Huang</div>
              <div>£ 1,800.90</div>
              <div>Paid</div>
              <div>{`>`} </div>
            </div>
          </div>
        </div>
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

        {/* details */}
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

        {/*Delete Modal*/}
        <div className="backgroundPrompt" style={{ display: 'none' }}>
          {' '}
        </div>
        <div className="ModalPrompt" style={{ display: 'none' }}>
          <h3>Confirm Deletion</h3>
          {/* ADD ID */}
          <p>Are you sure you want to delete invoice </p>
          <p>This action cannot be undone.</p>

          <div
            className="buttons--large"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '20px',
            }}
          >
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
          </div>
        </div>
        {/*Delete Modal end*/}
      </div>
    </div>
  );
}

export default App;
