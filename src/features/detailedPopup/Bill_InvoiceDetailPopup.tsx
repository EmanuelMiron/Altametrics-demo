import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closePopup } from "./Bill_InvoiceDetailSlice";
import { Invoice } from "../invoices/invoicesSlice";

export default function Bill_InvoiceDetailPopup() {
  const isOpen = useAppSelector(
    (state) => state.bill_InvoiceDetailSlice.isOpen
  );
  const popupData: Invoice = useAppSelector(
    (state) => state.bill_InvoiceDetailSlice.data
  );
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closePopup());
  };

  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {popupData.contact_name}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <pre>{JSON.stringify(popupData, null, 2)}</pre>
          </Typography>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
