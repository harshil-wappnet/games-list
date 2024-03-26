import React, { useState } from "react";
import { Product, addProduct } from "../redux/ProductSlice";
import { useAppDispatch } from "../redux/store";
const ProductForm = () => {
  const dispatch = useAppDispatch();
  const [product, setProduct] = useState<Product>({
    id: "",
    title: "",
    price: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct({ id: "", title: "", price: 0 });
  };
  return (
    <div>
      <h3>Product Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="enter product id"
          name="id"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="enter product title"
          name="title"
          onChange={handleChange}
        />
        <br />
        <input
          type="number"
          placeholder="enter product price"
          name="price"
          onChange={handleChange}
        />
        <br />
        <button className="btn btn-dark mt-4">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
