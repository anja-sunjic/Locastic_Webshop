import "react-dropdown/style.css";

import { getCartQuantity, getCartValue, setCartValue } from "../../helpers/cart";

import Dropdown from "react-dropdown";
import { WsCartInterface } from "../../interfaces";

//fake data for dropdown - 1-10 quantity
const options = Array.from(Array(10).keys()).map((x) => (++x).toString());
const AddToCart = ({ workshop, cart, setCart }: WsCartInterface) => {
  return (
    <div className="add-to-cart">
      <p className="head">Buy Your Ticket</p>
      <p className="price">
        {workshop.price.toFixed(2).replace(".", ",")} <span>EUR</span>
      </p>
      <div className="action">
        <Dropdown
          options={options}
          onChange={() => {}}
          value={options[0]}
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
              ...cart,
              data: getCartValue("cart"),
              quantity: getCartQuantity()
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
