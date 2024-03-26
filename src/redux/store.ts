import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductSlice";
import { useDispatch } from "react-redux";
import cartReducer from "./CartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
