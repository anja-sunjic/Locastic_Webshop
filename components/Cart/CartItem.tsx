import Image from "next/image";
import {
  getCartQuantity,
  getCartValue,
  removeCartItem,
} from "../../helpers/cart";
import { CartItemType } from "../../types";

type Props = {
  cart: CartItemType;
  setCartQuantity: any;
  setData: any;
};

const CartItem = ({ cart, setData, setCartQuantity }: Props) => {
  return (
    <div className="cart-item">
      <div className="img">
        <Image src={cart.imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="right">
        <div className="top-line">
          <span>{cart.title}</span>
          <div
            className="trash-action"
            onClick={() => {
              removeCartItem(cart.id);
              setData(getCartValue("cart"));
              setCartQuantity(getCartQuantity());
            }}
          >
            <img src="/icons/trash.svg" alt="" />
          </div>
        </div>
        <div className="action">
          <div className="price">{cart.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
