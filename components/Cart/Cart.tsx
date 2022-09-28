import { CartItemType, CartType } from "../../types";
import {
  getCartQuantity,
  getTotalCartPrice,
} from "../../helpers/cart";
import { useEffect, useState } from "react";

import { CartInterface } from "../../interfaces";
import CartItem from "./CartItem";
import Checkout from "../Checkout/Checkout";

const Cart = ({ cart, setCart }: CartInterface) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCart({
      ...cart,
      quantity: getCartQuantity(),
    })
  }, []);

  return (
    <>
      <div className={`cart ${cart.open ? "open" : ""}`}>
        <div className="top">
          <img src="/icons/cart.svg" alt="" />
          {!cart.quantity ? (
            <p>Cart is empty</p>
          ) : (
            <p>{cart.quantity} Workshops</p>
          )}
          <div className="close" onClick={() => setCart({
            ...cart,
            open: false,
          })}>
            <img src="/icons/close.svg" alt="" />
          </div>
        </div>
        <div className="cart-content">
          {cart.data.map((cartItem: CartItemType, index: number) => {
            return (
              <CartItem
                cart={cart}
                item={cartItem}
                setCart={setCart}
                key={`workshop_${index}`}
              />
            );
          })}
        </div>
        <div className="cart-total">
          <p>Total: {getTotalCartPrice(cart.data)}</p>
        </div>
        <div
          className="checkout-button _button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <span>Checkout</span>
        </div>
      </div>
      <Checkout cart={cart} setCart={setCart} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Cart;
