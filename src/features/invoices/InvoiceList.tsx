import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TheTable from "../../components/TheTable";
import { useEffect } from "react";
import { fetchInvoices } from "./invoicesSlice";

const InvoiceList = () => {
  const invoices = useAppSelector((state) => state.invoices.invoices);
  const invoicesStatus = useAppSelector((state) => state.invoices.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (invoicesStatus === "idle") {
      dispatch(fetchInvoices());
    }
  }, [invoicesStatus, dispatch]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="m-0 h-screen w-full p-0">
        <Header />
        <TheTable data={invoices} />
      </div>
    </div>
  );
};

export default InvoiceList;
