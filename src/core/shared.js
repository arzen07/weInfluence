import { Snackbar } from "@material-ui/core";
import React from "react";
import MuiAlert from '@material-ui/lab/Alert';
export const ErrorBanner = (severity,message,handleClose,open) => {


    return <Snackbar anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
    >
        <MuiAlert severity={severity} variant="filled">{message}</MuiAlert>
    </Snackbar>
}