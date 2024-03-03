import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth-slice";
import listsReducer from "../redux/lists-slice";
import modalReducer from "../redux/modal-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lists: listsReducer,
    modal: modalReducer,
  },
});
