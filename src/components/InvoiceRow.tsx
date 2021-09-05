import * as React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStatus } from '../store/actions/Invoices';

type InvoiceProps = {
  invoiceNr: string;
  invoiceDate: string;
  name: string;
  amount: number;
  status: string;
};

const InvoiceRow: React.FC<InvoiceProps> = ({
  invoiceNr,
  invoiceDate,
  name,
  amount,
  status,
}) => {
  const dispatch = useDispatch();

  const handleStatus = (invNr: string) => {
    dispatch(setStatus(invNr, 'done'));
  };

  return (
    <>
      <div
        className="invoiceList"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px 32px 20px 32px',
          //alignContent: 'right',
          textAlign: 'right',
        }}
      >
        <div style={{ textAlign: 'left', width: '10%' }}>{invoiceNr}</div>
        <div style={{ textAlign: 'left', width: '20%' }}>{invoiceDate}</div>
        <div style={{ textAlign: 'left', width: '30%' }}>{name}</div>
        <div style={{ textAlign: 'right', width: '20%' }}>£ {amount}</div>
        <button
          onClick={() => handleStatus(invoiceNr)}
          style={{ textAlign: 'center', width: '15%' }}
        >
          {status}
        </button>
        <div style={{ textAlign: 'left', width: '5%' }}>
          <Link to={`/details/${invoiceNr}`}>Details</Link>
        </div>
      </div>
    </>
  );
};

export default InvoiceRow;
