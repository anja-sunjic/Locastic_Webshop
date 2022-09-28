import { CheckoutInterface } from "../../interfaces";
import Form from "./Form";

const Checkout = ({ cart, setCart, isOpen, setIsOpen }: CheckoutInterface) => {
  return (
    <div className={`checkout-modal modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background" onClick={() => setIsOpen(false)} ></div>
      <div className="modal-content">
        <div className="inner">
          <div className="close" onClick={() => setIsOpen(false)}>
            <img src="/icons/close.svg" alt="" />
          </div>
          <p className="head">Checkout</p>
          <p className="sub">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing.
          </p>
          <Form cart={cart} setCart={setCart} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
