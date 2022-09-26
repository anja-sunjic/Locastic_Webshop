import { useEffect, useState } from "react";
import {
  getCartQuantity,
  getCartValue,
  getTotalCartPrice,
} from "../../helpers/cart";
import { CartItemType } from "../../types";
import Checkout from "../Checkout/Checkout";
import CartItem from "./CartItem";

const Cart = ({ isOpen, close }: any) => {
  const [data, setData] = useState([]);
  const [cartQuantity, setCartQuantity] = useState();

  const [checkout, setCheckout] = useState(false);
  const CloseCheckout = () => setCheckout(false);

  useEffect(() => {
    setCartQuantity(getCartQuantity());
    setData(getCartValue("cart"));
  }, []);

  return (
    <>
      <div className={`cart ${isOpen ? "open" : ""}`}>
        <div className="top">
          <img src="/icons/cart.svg" alt="" />
          {!cartQuantity ? (
            <p>Cart is empty</p>
          ) : (
            <p>{cartQuantity} Workshops</p>
          )}
          <div className="close" onClick={() => close()}>
            <img src="/icons/close.svg" alt="" />
          </div>
        </div>
        <div className="cart-content">
          {data.map((cart: CartItemType) => {
            return (
              <CartItem
                cart={cart}
                setData={setData}
                setCartQuantity={setCartQuantity}
                key={`workshop_${cart.id}`}
              />
            );
          })}
        </div>
        <div className="cart-total">
          <p>Total: {getTotalCartPrice(data)}</p>
        </div>
        <div
          className="checkout-button _button"
          onClick={() => {
            setCheckout(true);
            close();
          }}
        >
          <span>Checkout</span>
        </div>
      </div>
      <Checkout isOpen={checkout} close={CloseCheckout} />
    </>
  );
};

export default Cart;
