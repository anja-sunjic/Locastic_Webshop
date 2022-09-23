import dayjs from "dayjs";
import Image from "next/image";
import Button from "./Button";

type Props = {
  img: string;
  date: string;
  title: string;
  price: number;
  category: string;
};

const WsCard = ({ img, date, title, price, category }: Props) => {
  return (
    <div className="ws-card">
      <a className="ws-img">
        <Image src={img} layout="fill" objectFit="cover" />
      </a>
      <div className="ws-desc">
        <div className="icon">
          <img src={`/icons/${category}.svg`} alt="" />
        </div>
        <div className="when">
          <div className="date">
            <img src="/icons/date.svg" alt="" />
            <p>{dayjs(date).format("DD.MM.YYYY.")}</p>
          </div>
          <div className="time">
            <img src="/icons/time.svg" alt="" />
            <p>{dayjs(date).format("hh:mm")}h</p>
          </div>
        </div>
        <a className="title">{title}</a>
        <p className="price">
          {price.toFixed(2).replace(".", ",")} <span>EUR</span>
        </p>
        <Button name="Add to cart" />
      </div>
    </div>
  );
};

export default WsCard;
