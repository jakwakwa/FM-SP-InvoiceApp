import * as React from 'react';
// Declare the type of the props
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
  return (
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
      <div style={{ textAlign: 'center', width: '15%' }}>{status}</div>
      <div style={{ textAlign: 'left', width: '5%' }}>{`>`} </div>
    </div>
  );
};

export default InvoiceRow;
