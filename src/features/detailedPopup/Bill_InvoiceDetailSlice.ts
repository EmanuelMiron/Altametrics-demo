import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Invoice } from "../invoices/invoicesSlice";

type bill_InvoiceDetailInitialState = {
  data: Invoice;
  isOpen: boolean;
};

const initialState: bill_InvoiceDetailInitialState = {
  data: {
    id: 1,
    status: "",
    amount_formatted: "",
    contact_name: "",
    contact_email: "",
    contact_phone: "",
  },
  isOpen: false,
};

const bill_InvoiceDetailSlice = createSlice({
  name: "bill_InvoiceDetailSlice",
  initialState,
  reducers: {
    openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
    setPopupData: (state, action: PayloadAction<Invoice>) => {
      state.data = action.payload;
    },
  },
});

export default bill_InvoiceDetailSlice.reducer;

export const { openPopup, closePopup, setPopupData } =
  bill_InvoiceDetailSlice.actions;
