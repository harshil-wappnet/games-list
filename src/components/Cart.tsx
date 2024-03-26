import React from "react";
import { useSelector } from "react-redux";
import {
  getCartSelector,
  removeFromCart,
  totalPrice,
} from "../redux/CartSlice";
import { IoRemoveCircle } from "react-icons/io5";
import { useAppDispatch } from "../redux/store";

const Cart = () => {
  const cartProducts = useSelector(getCartSelector);
  const totalAmount = useSelector(totalPrice);
  const dispatch = useAppDispatch();
  const removeFromCarthandler = (id: string) => {
    dispatch(removeFromCart(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      {cartProducts.length === 0 ? (
        <p>Add product to cart</p>
      ) : (
        <>
          <table className="table table-bordered border-dark">
            <thead>
              <tr>
                <td>Title</td>
                <td>Quantity</td>
                <td>Remove From Cart</td>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.amount}</td>
                  <td>
                    <button
                      className="btn bg-white"
                      onClick={() => removeFromCarthandler(item.id)}
                    >
                      <IoRemoveCircle />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table table-bordered border-dark">
            <tbody>
              <tr>
                <td>Total Amount:</td>
                <td>{totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Cart;
