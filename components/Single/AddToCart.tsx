import Link from "next/link";
import { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "../UI/Button";
type Props = {
  price: number;
};
const options = Array.from(Array(10).keys()).map((x) => (++x).toString());
const AddToCart = ({ price }: Props) => {
  return (
    <div className="add-to-cart">
      <p className="head">Buy Your Ticket</p>
      <p className="price">
        {price.toFixed(2).replace(".", ",")} <span>EUR</span>
      </p>
      <div className="action">
        <Dropdown
          options={options}
          onChange={() => {}}
          value={options[0]}
          placeholder="Select an option"
        />
        ;
        <Button name="Add to Cart" />
      </div>
    </div>
  );
};

export default AddToCart;
