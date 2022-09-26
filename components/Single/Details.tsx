import dayjs from "dayjs";
import Image from "next/image";
import AddToCart from "./AddToCart";

const Details = ({ workshop }: any) => {
  return (
    <div className="ws-body details">
      <div className="top-img">
        <Image src={workshop.imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="bottom">
        <div className="ws-details">
          <div className="top">
            <div className="icon">
              <img src={`/icons/${workshop.category}.svg`} alt="" />
            </div>
            <div className="date">
              <img src="/icons/date.svg" alt="" />
              <p>{dayjs(workshop.date).format("DD.MM.YYYY.")}</p>
            </div>
            <div className="time">
              <img src="/icons/time.svg" alt="" />
              <p>{dayjs(workshop.date).format("hh:mm")}h</p>
            </div>
          </div>
          <h1>{workshop.title}</h1>
          <p className="author">
            WITH <span className="bold">Marko Maljković </span>
          </p>
          <p className="desc">{workshop.desc}</p>
        </div>
        <AddToCart workshop={workshop} />
      </div>
    </div>
  );
};

export default Details;
