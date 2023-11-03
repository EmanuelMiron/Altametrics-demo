import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INVOICES_URL =
  "https://ak.contentcubed.com/api/documents?search=type:invoice&page=1&limit=26";

export const fetchInvoices = createAsyncThunk(
  "invoices/fetchInvoices",
  async () => {
    try {
      const response = await axios.get(INVOICES_URL, {
        auth: {
          username: "cghiurea@altametrics.com",
          password: "pass",
        },
      });
      return response.data.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("error message: ", err.message);
        return err.message;
      } else {
        console.log("unexpected error: ", err);
        return "An unexpected error occurred";
      }
    }
  }
);

export type Invoice = {
  id: number;
  status: string;
  amount_formatted: string;
  contact_name: string;
  contact_email: string;
  contact_phone: string;
};

type InvoicesState = {
  invoices: Array<Invoice>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string | undefined;
};

const initialState: InvoicesState = {
  invoices: [],
  status: "idle",
  error: null,
};

const invoicesSlice = createSlice({
  name: "invoices",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchInvoices.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInvoices.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.invoices = action.payload;
      })
      .addCase(fetchInvoices.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default invoicesSlice.reducer;
