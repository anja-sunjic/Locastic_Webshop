import Form from "./Form";

const Checkout = ({ isOpen, close }: any) => {
  return (
    <div className={`checkout-modal modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="inner">
          <div className="close" onClick={() => close()}>
            <img src="/icons/close.svg" alt="" />
          </div>
          <p className="head">Checkout</p>
          <p className="sub">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
            printing.
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
