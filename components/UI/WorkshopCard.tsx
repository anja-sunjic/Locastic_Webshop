import dayjs from "dayjs";
import Image from "next/image";
import Button from "./Button";

const WsCard = (props: any) => {
  console.log(props.date);
  return (
    <div className="ws-card">
      <a className="ws-img">
        <Image src={props.img} layout="fill" objectFit="cover" />
      </a>
      <div className="ws-desc">
        <div className="when">
          <p className="date">{dayjs(props.date).format("DD.MM.YYYY.")}</p>
          <p className="time">{dayjs(props.date).format("hh:mm")}h</p>
        </div>
        <a className="title">{props.title}</a>
        <p className="price">
          {props.price} <span>$</span>
        </p>
        <Button name="Add to cart" />
      </div>
    </div>
  );
};

export default WsCard;
