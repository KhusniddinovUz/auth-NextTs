import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "@/store/auth-slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "@/store/actions/auth";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
