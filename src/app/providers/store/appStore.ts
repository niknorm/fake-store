import cartReducer from "./../../../entities/cart/model/cartSlice";

import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../../../entities/productCard/api/productApi";

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
