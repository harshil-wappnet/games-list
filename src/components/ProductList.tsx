import React from "react";
import { useSelector } from "react-redux";
import { Product, getProductsSelector } from "../redux/ProductSlice";
import { removeProduct } from "../redux/ProductSlice";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../redux/store";
import { FaCartShopping } from "react-icons/fa6";
import { addToCart } from "../redux/CartSlice";

const ProductList = ({ setAbc, abc }: any) => {
  const products = useSelector(getProductsSelector);
  const dispatch = useAppDispatch();

  const removeProductStore = (id: string) => {
    dispatch(removeProduct(id));
  };

  const addToCartHandler = (product: Product) => {
    dispatch(addToCart(product));
  };
  //   const removeFromCartHandler = (product: Product) => {
  //     dispatch(addToCart(product));
  //   };
  return (
    <div>
      <label>Games List</label>

      <table className="table table-bordered border-dark">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Price</td>
            <td>Delete</td>
            <td>Add to Cart</td>
          </tr>
        </thead>
        <tbody>
          {products.map((item, id) => {
            return (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn bg-white"
                    onClick={() => removeProductStore(item.id)}
                  >
                    <MdDelete />
                  </button>
                </td>
                <td>
                  <button
                    className="btn bg-white"
                    onClick={() => addToCartHandler(item)}
                  >
                    <FaCartShopping />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
