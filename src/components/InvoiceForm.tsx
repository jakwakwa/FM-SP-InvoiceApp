import * as React from 'react';
import { Component } from 'react';

export default function InvoiceForm() {
  return (
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
  );
}
