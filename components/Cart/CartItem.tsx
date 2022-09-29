import "react-dropdown/style.css";

import {
  getCartQuantity,
  getCartValue,
  getProperQuantityAndPrice,
  removeCartItem,
  setCartQuantity,
} from "../../helpers/cart";

import { CartItemType } from "../../types";
import Dropdown from "react-dropdown";
import Image from "next/image";

type Props = {
  cart: any;
  item: CartItemType;
  setCart: any;
};

const CartItem = ({ cart, item, setCart }: Props) => {
  const single = getProperQuantityAndPrice(cart, item);
  const options = Array.from(Array(single.quantity > 10 ? single.quantity : 10).keys()).map((x) => (++x).toString());

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
                data: getCartValue("cart"),
                quantity: getCartQuantity(),
              });
            }}
          >
            <img src="/icons/trash.svg" alt="" />
          </div>
        </div>
        <div className="action">
          <Dropdown
            options={options}
            onChange={(e) => {
              const qty = parseInt(e.value);
              setCartQuantity(cart.data, item, qty);
              setCart({
                ...cart,
                data: getCartValue("cart"),
                quantity: getCartQuantity(),
              });
            }}
            value={single.quantity.toString()}
            placeholder="Select an option"
          />

          <p className="price">
            {single.totalPrice.toFixed(2).replace(".", ",")} <span>EUR</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
