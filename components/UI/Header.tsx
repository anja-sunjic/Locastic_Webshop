import Link from "next/link";
import { useEffect, useState } from "react";
import { getCartQuantity } from "../../helpers/cart";
import Cart from "../Cart/Cart";

const Header = () => {
  const [cart, setCart] = useState(false);
  const CloseCart = () => setCart(false);
  const [cartQuantity, setCartQuantity] = useState();

  useEffect(() => {
    setCartQuantity(getCartQuantity());
  }, []);
  return (
    <>
      <header className="header">
        <div className="inner">
          <Link href="/">
            <a>
              <img src="/icons/logo.svg" alt="Logo" />
            </a>
          </Link>
          <div className="cart-action" onClick={() => setCart(true)}>
            <img src="/icons/cart.svg" alt="" />
            {!cartQuantity ? (
              <p>Cart is empty</p>
            ) : (
              <p>{cartQuantity} Workshops in Cart</p>
            )}
          </div>
        </div>
      </header>
      <Cart isOpen={cart} close={CloseCart} />
    </>
  );
};

export default Header;
