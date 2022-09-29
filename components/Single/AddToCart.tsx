import "react-dropdown/style.css";

import {
  getCartQuantity,
  getCartValue,
  getProperQuantityAndPrice,
  setCartQuantity,
  setCartValue,
} from "../../helpers/cart";

import Dropdown from "react-dropdown";
import { WsCartInterface } from "../../interfaces";

const AddToCart = ({ workshop, cart, setCart }: WsCartInterface) => {
  const single = getProperQuantityAndPrice(cart, workshop);
  const options = Array.from(
    Array(single.quantity > 10 ? single.quantity : 10).keys()
  ).map((x) => (++x).toString());

  return (
    <div className="add-to-cart">
      <p className="head is-hidden-touch">Buy Your Ticket</p>
      <p className="price">
        {workshop.price.toFixed(2).replace(".", ",")} <span>EUR</span>
      </p>
      <div className="action">
        <Dropdown
          options={options}
          onChange={(e) => {
            const qty = parseInt(e.value);
            setCartQuantity(cart.data, workshop, qty);
            setCart({
              ...cart,
              data: getCartValue("cart"),
              quantity: getCartQuantity(),
            });
          }}
          value={single.quantity.toString()}
          placeholder="Select an option"
        />

        <a
          className="_button"
          onClick={() => {
            setCartValue(getCartValue("cart"), "cart", {
              ...workshop,
              quantity: 1,
            });
            setCart({
              open: true,
              data: getCartValue("cart"),
              quantity: getCartQuantity(),
            });
          }}
        >
          <span>Add to Cart</span>
        </a>
      </div>
    </div>
  );
};

export default AddToCart;
