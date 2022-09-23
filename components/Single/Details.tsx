import dayjs from "dayjs";
import Image from "next/image";
import WsCard from "../UI/WorkshopCard";

const Details = () => {
  const workshop = {
    id: 1,
    title: "When you get lost in API testing",
    desc: "The toughest part is probably to figure out which type of tests to write and how to test some specific logic in your app - but don't give up! Paula will present a few tips she learned along the way that will hopefully make your life easier. In this talk, you will hear about different test types and when to use them, real examples based on PHPUnit and Postman, followed by some tools for checking the test quality",
    price: 350,
    date: "2020-01-26T13:51:50.417-07:00",
    category: "backend",
    userId: 1,
    imageUrl: "https://pbs.twimg.com/media/EREoip3XsAEPDRp.jpg",
  };

  return (
    <div className="ws-body details">
      <div className="top-img">
        <Image src={workshop.imageUrl} layout="fill" objectFit="cover" />
      </div>
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
        <h2>
          with <span className="bold">Marko Maljković </span>
        </h2>
        <p className="desc">{workshop.desc}</p>
      </div>
    </div>
  );
};

export default Details;
