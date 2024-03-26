import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Product {
  id: string;
  title: string;
  price: number;
}

const initialState: Product[] = [
  { id: "1", title: "After long way", price: 100 },
  { id: "2", title: "Before long day", price: 200 },
  { id: "3", title: "Between Day and Night", price: 300 },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      return [...state, action.payload];
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const getProductsSelector = (state: RootState) => state.products;
export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
