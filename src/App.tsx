import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoiceList from "./features/invoices/InvoiceList";
import BillsList from "./features/bills/BillsList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<InvoiceList />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/bills" element={<BillsList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
