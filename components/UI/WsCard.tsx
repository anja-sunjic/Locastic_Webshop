import {
  getCartQuantity,
  getCartValue,
  setCartValue,
} from "../../helpers/cart";

import Image from "next/image";
import Link from "next/link";
import { WsCartInterface } from "../../interfaces";
import dayjs from "dayjs";

const WsCard = ({ workshop, cart, setCart }: WsCartInterface) => {
  return (
    <div className="ws-card">
      <Link href={`/workshop/${workshop.id}`}>
        <a className="ws-img">
          <Image src={workshop.imageUrl} layout="fill" objectFit="cover" />
        </a>
      </Link>
      <div className="ws-desc">
        <div className="icon">
          <img src={`/icons/${workshop.category}.svg`} alt="" />
        </div>
        <div className="when">
          <div className="date">
            <img src="/icons/date.svg" alt="" />
            <p>{dayjs(workshop.date).format("DD.MM.YYYY.")}</p>
          </div>
          <div className="time">
            <img src="/icons/time.svg" alt="" />
            <p>{dayjs(workshop.date).format("hh:mm")}h</p>
          </div>
        </div>
        <Link href={`/workshop/${workshop.id}`}>
          <a className="title">{workshop.title}</a>
        </Link>
        <div className="bottom-mobile">
          <p className="price">
            {workshop.price.toFixed(2).replace(".", ",")} <span>EUR</span>
          </p>
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
                quantity: getCartQuantity(),
              });
            }}
          >
            <span className="is-hidden-touch">Add to Cart</span>
            <img className="is-hidden-desktop" src="/icons/cart.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WsCard;
