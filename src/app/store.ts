import {configureStore} from '@reduxjs/toolkit';
import invoicesReducer from '../features/invoices/invoicesSlice';
import billsReducer from '../features/bills/billsSlice';
import bill_InvoiceDetailReducer from '../features/detailedPopup/Bill_InvoiceDetailSlice'

export const store = configureStore({
    reducer: {
        invoices: invoicesReducer,
        bills: billsReducer,
        bill_InvoiceDetailSlice: bill_InvoiceDetailReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;