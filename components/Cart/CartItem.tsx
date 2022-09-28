import {
  getCartQuantity,
  getCartValue,
  removeCartItem,
} from "../../helpers/cart";

import { CartItemType } from "../../types";
import Image from "next/image";

type Props = {
  cart: any,
  item: CartItemType;
  setCart: any
};

const CartItem = ({ cart, item, setCart }: Props) => {
  return (
    <div className="cart-item">
      <div className="img">
        <Image src={item.imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="right">
        <div className="top-line">
          <span>{item.title}</span>
          <div
            className="trash-action"
            onClick={() => {
              removeCartItem(item.id);
              setCart({
                ...cart,
                data: getCartValue('cart'),
                quantity: getCartQuantity()
              });
            }}
          >
            <img src="/icons/trash.svg" alt="" />
          </div>
        </div>
        <div className="action">
          <div className="price">{item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
