import { configureStore } from "@reduxjs/toolkit";
import reducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
