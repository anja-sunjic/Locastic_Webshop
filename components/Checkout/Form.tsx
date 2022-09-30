import {
  getCartItemTotalPrice,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../../helpers/cart";

import { CartInterface } from "../../interfaces";
import { CartItemType } from "../../types";
import ReactDropdown from "react-dropdown";
import { postData } from "../../helpers/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LOADING = "Loading";
const SUCCESS = "Success";
const INITIAL = "Initial";
const ERROR = "Error";
const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
const Form = ({ cart, setCart }: CartInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(INITIAL);

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
          totalPrice: getCartItemTotalPrice(cartData),
        });
      });

      formattedData.push({
        products: {
          items: orderItems,
        },
        totalQuantity: getTotalCartQuantity(data),
        totalPrice: getTotalCartPrice(data),
      });

      return formattedData[0];
    }
  }

  const handleContactFormSubmit = (data: any) => {
    console.log(data);
    const order = convertCartToOrder(cart);
    setFormSubmitted(LOADING);

    // Creating new order upon submission
    postData(order)
      .then(() => {
        setCart({
          data: [],
          open: false,
          quantity: 0,
        });
        setFormSubmitted(SUCCESS);
      })
      .catch((err) => {
        setFormSubmitted(ERROR);
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(handleContactFormSubmit)}>
      <div className="columns is-multiline">
        <div className="column is-12">
          <div className="field">
            <div className="control">
              <span className="_label">First Name</span>
              {errors?.firstName && (
                <span className="_label__error">
                  {errors.firstName.message as any}
                </span>
              )}
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required!",
                })}
                disabled={formSubmitted === LOADING}
                placeholder="Type your first name here"
              />
            </div>
          </div>
        </div>
        <div className="column is-12">
          <div className="field">
            <div className="control">
              <span className="_label">Last Name</span>
              {errors?.lastName && (
                <span className="_label__error">
                  {errors.lastName.message as any}
                </span>
              )}
              <input
                type="text"
                placeholder="Type your last name here"
                {...register("lastName", {
                  required: "Last name is required!",
                })}
              />
            </div>
          </div>
        </div>
        <div className="column is-12">
          <div className="field">
            <div className="control">
              <span className="_label">Email Address</span>
              {errors?.email && (
                <span className="_label__error">
                  {errors.email.message as any}
                </span>
              )}
              <input
                type="email"
                {...register("email", {
                  required: "Please Enter Your Email!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please Enter A Valid Email!",
                  },
                })}
                disabled={formSubmitted === LOADING}
                placeholder="Type your email address here"
              />
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <div className="control">
              <span className="_label">Date of Birth</span>
              <input
                type="date"
                {...register("date", { required: "Please enter valid date!" })}
              />
              {errors?.date && (
                <span className="_label__error">
                  {errors.date.message as any}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="column is-6">
          <div className="field">
            <div className="control">
              <span className="_label">Gender</span>
              <select
                className="Select-control"
                {...register("gender", { required: "Please select a gender!" })}
              >
                <option value="">Select gender</option>
                {genders.map((gender) => {
                  return (
                    <option value={gender.value} key={gender.value}>
                      {gender.label}
                    </option>
                  );
                })}
              </select>
              {errors?.gender && (
                <span className="_label__error">
                  {errors.gender.message as any}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="column is-12">
          <div className="field">
            <div className="control">
              <span className="_label">Address</span>
              {errors?.address && (
                <span className="_label__error">
                  {errors.address.message as any}
                </span>
              )}
              <input
                type="text"
                {...register("address", {
                  required: "Please enter your address!",
                })}
                placeholder="Type your address here"
              />
            </div>
          </div>
        </div>
        <div className="column is-12">
          <div className="field">
            <div className="control">
              <span className="_label">Zip Code</span>
              {errors?.zip && (
                <span className="_label__error">
                  {errors.zip.message as any}
                </span>
              )}
              <input
                type="text"
                {...register("zip", { required: "Please enter ZIP Code" })}
              />
            </div>
          </div>
        </div>
        <div className="column">
          {errors?.agreement && (
            <div className="_label__error" style={{ color: "red" }}>
              {errors.agreement.message as any}
            </div>
          )}
          <label className="checkbox_label">
            I Agree
            <input
              type="checkbox"
              {...register("agreement", {
                required: "You need to agree to our terms!",
              })}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <input
        className="submit-btn"
        type="submit"
        value={formSubmitted === LOADING ? "Loading..." : "Checkout"}
        disabled={formSubmitted === LOADING}
      />
    </form>
  );
};

export default Form;
