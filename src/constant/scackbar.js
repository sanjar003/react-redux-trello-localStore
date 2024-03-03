import { enqueueSnackbar } from "notistack";

export const notify = (message, variant = "success") => {
  enqueueSnackbar({
    variant: variant,
    autoHideDuration: 5000,
    message: message,
    anchorOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  });
};
