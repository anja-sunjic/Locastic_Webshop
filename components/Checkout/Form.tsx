import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
const DatePicker = require("react-datepicker");

const Form = (props: any) => {
  const { control, register, handleSubmit, reset } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const [formState, setFormState] = useState("INITIAL");
  const handleContactFormSubmit = async (data) => {
    setFormState("LOADING");
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
                  disabled={formState === "LOADING"}
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
                  disabled={formState === "LOADING"}
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
                  disabled={formState === "LOADING"}
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
                  disabled={formState === "LOADING"}
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
                  disabled={formState === "LOADING"}
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
          value={formState === "LOADING" ? "Loading..." : "Checkout"}
          disabled={formState === "LOADING"}
        />
        {formState === "SUCCESS" ? (
          <div className="form-message form-message_success">
            The message was sent successfully!
          </div>
        ) : null}
        {formState === "ERROR" ? (
          <div className="form-message form-message_error">
            There was an error processing the message. Please try again!
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
