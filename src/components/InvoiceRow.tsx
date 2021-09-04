import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { setStatus } from "../store/actions/Invoices";
import { Link } from "react-router-dom";
import { InvoiceDetail } from "../pages/InvoiceDetail";
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

  const handleStatus = () => {
    dispatch(setStatus(invoiceNr, "done"));
  };

  return (
    <>
      <div
        className="invoiceList"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 32px 20px 32px",
          //alignContent: 'right',
          textAlign: "right",
        }}
      >
        <div style={{ textAlign: "left", width: "10%" }}>
          {invoiceNr}
        </div>
        <div style={{ textAlign: "left", width: "20%" }}>{invoiceDate}</div>
        <div style={{ textAlign: "left", width: "30%" }}>{name}</div>
        <div style={{ textAlign: "right", width: "20%" }}>£ {amount}</div>
        <div
          onClick={() => handleStatus(invoiceNr)}
          style={{ textAlign: "center", width: "15%" }}
        >
          {status}
        </div>
        <div style={{ textAlign: "left", width: "5%" }}><Link to={`/details/${invoiceNr}`}>> </Link> </div>
      </div>
    </>
  );
};

export default InvoiceRow;
