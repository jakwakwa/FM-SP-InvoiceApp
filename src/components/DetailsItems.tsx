import React from 'react';
import type { Item } from '../types/invoices';

const DetailsItems = ({ name, quantity, price, total }: Item): JSX.Element => {
  return (
    <>
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
          {name}
        </div>
        <div style={{ width: '10%', color: '#7E88C3' }}>{quantity}</div>
        <div style={{ width: '20%', color: '#7E88C3' }}>£ {price}</div>
        <div style={{ width: '20%', color: '#0C0E16' }}>£ {total}</div>
      </div>
    </>
  );
};

export default DetailsItems;
