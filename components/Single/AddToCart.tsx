import Link from "next/link";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { getCartValue, setCartValue } from "../../helpers/cart";

//fake data for dropdown - 1-10 quantity
const options = Array.from(Array(10).keys()).map((x) => (++x).toString());
const AddToCart = ({ workshop }: any) => {
  console.log(workshop);
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
          }}
        >
          <span>Add to Cart</span>
        </a>
      </div>
    </div>
  );
};

export default AddToCart;
