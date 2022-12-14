import Cart from "../Cart/Cart";
import { CartInterface } from "../../interfaces";
import Link from "next/link";

const Header = ({ cart, setCart }: CartInterface) => {
  return (
    <>
      <header className="header">
        <div className="inner">
          <Link href="/">
            <a className="logo">
              <img src="/icons/logo.svg" alt="Logo" />
            </a>
          </Link>
          <div
            className="cart-action"
            onClick={() =>
              setCart({
                ...cart,
                open: true,
              })
            }
          >
            <div className="cart-icon">
              <img src="/icons/cart.svg" alt="" />
              {!cart.quantity ? "" : <div className="blue-dot"></div>}
            </div>
            {!cart.quantity ? (
              <p className="is-hidden-mobile">Cart is empty</p>
            ) : (
              <p className="is-hidden-mobile">
                {cart.quantity} Workshops in Cart
              </p>
            )}
          </div>
        </div>
      </header>
      <Cart cart={cart} setCart={setCart} />
    </>
  );
};

export default Header;
