import { CartItemType, CartType } from "../../types";
import { getCartItemTotalPrice, getTotalCartPrice, getTotalCartQuantity } from "../../helpers/cart";

import { CartInterface } from "../../interfaces";
import { postData } from "../../helpers/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

const DatePicker = require("react-datepicker");

const LOADING = "Loading";
const SUCCESS = "Success";
const INITIAL = "Initial";
const ERROR = "Error";

const Form = ({cart, setCart}: CartInterface) => {
  const { control, register, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [formState, setFormState] = useState(INITIAL);

  function convertCartToOrder(cart: any) {
    const data = cart?.data;
    const formattedData = [];
    const orderItems: Array<any> = [];

    if (data?.length) {
      data.map((cartData: CartItemType) => {
        orderItems.push({
          id: cartData.id,
          title: cartData.title,
          imageUrl: cartData.imageUrl,
          quantity: cartData.quantity,
          price: cartData.price,
          totalPrice: getCartItemTotalPrice(cartData)
        })
      })

      formattedData.push({
        products: {
          items: orderItems
        },
        totalQuantity: getTotalCartQuantity(data),
        totalPrice: getTotalCartPrice(data)
      })

      return formattedData[0];
    }
  }

  const handleContactFormSubmit = async (data: any) => {
    console.log(data);

    const order = convertCartToOrder(cart);
    setFormState(LOADING);

    // Creating new order upon submission
    postData(order)
      .then(() => {
        setCart({
          data: [],
          open: false,
          quantity: 0
        });
        setFormState(SUCCESS);
      }).catch(err => {
        setFormState(ERROR);
        console.error(err);
      });
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit(handleContactFormSubmit)}>
        <div className="columns is-multiline">
          <div className="column is-12">
            <div className="field">
              <div className="control">
                <span className="floating-label">First Name</span>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  disabled={formState === LOADING}
                  required
                />
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <div className="control">
                <span className="floating-label">Last Name</span>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  disabled={formState === LOADING}
                  required
                />
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <div className="control">
                <span className="floating-label">Email Address</span>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  disabled={formState === LOADING}
                  required
                />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <div className="control">
                <span className="floating-label">Date of Birth</span>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="column is-6">
            <div className="field">
              <div className="control">
                <span className="floating-label">Gender</span>
                <input type="date" />
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <div className="control">
                <span className="floating-label">Address</span>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  disabled={formState === LOADING}
                  required
                />
              </div>
            </div>
          </div>
          <div className="column is-12">
            <div className="field">
              <div className="control">
                <span className="floating-label">Zip Code</span>
                <input
                  type="text"
                  {...register("zip", { required: true })}
                  disabled={formState === LOADING}
                  required
                />
              </div>
            </div>
          </div>
          <input type="checkbox" /> <span>I Agree</span>
        </div>

        <input
          className="submit-btn"
          type="submit"
          value={formState === LOADING ? "Loading..." : "Checkout"}
          disabled={formState === LOADING}
        />
        {formState === SUCCESS ? (
          <div className="form-message form-message_success">
            The message was sent successfully!
          </div>
        ) : null}
        {formState === ERROR ? (
          <div className="form-message form-message_error">
            There was an error processing the message. Please try again!
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
