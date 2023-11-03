import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Invoice } from "../invoices/invoicesSlice";

const BILLS_URL =
  "https://ak.contentcubed.com/api/documents?search=type:bill&page=1&limit=26";

export const fetchBills = createAsyncThunk("bills/fetchBills", async () => {
  try {
    const response = await axios.get(BILLS_URL, {
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
});

type BillsState = {
  bills: Array<Invoice>;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: null | string | undefined;
};

const initialState: BillsState = {
  bills: [],
  status: "idle",
  error: null,
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBills.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBills.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bills = action.payload;
      })
      .addCase(fetchBills.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default billsSlice.reducer;
