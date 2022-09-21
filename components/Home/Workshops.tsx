import WsCard from "../UI/WorkshopCard";

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "When you get lost in API testing",
      desc: "The toughest part is probably to figure out which type of tests to write and how to test some specific logic in your app - but don't give up! Paula will present a few tips she learned along the way that will hopefully make your life easier. In this talk, you will hear about different test types and when to use them, real examples based on PHPUnit and Postman, followed by some tools for checking the test quality",
      price: 350,
      date: "2020-01-26T13:51:50.417-07:00",
      category: "backend",
      userId: 1,
      imageUrl: "https://pbs.twimg.com/media/EREoip3XsAEPDRp.jpg",
    },
    {
      id: 2,
      title: "YouTube for your business!",
      desc: "Aleksandar Ašković aka Kojot is one of the pioneers when it comes to regional YouTube expertise. His tech journey started at the age of 12 when he inserted the first coin into the arcade machine. In 1997 he becomes editor of the renowned Serbian magazine “Svet Kompjutera” and in 2001 he started his first TV show called Game Over. After that, it was time to become a bit serious so in 2019 KursorTV was born, a TV show that was covering mostly tech topics. In 2014 Aleksandar decided to make a switch in his career and dedicate his time to YouTube. During the last 5 years, he was focused on helping brands utilize this platform to a full extent. Kojot considers YouTube channel of “Sport Klub” the prime example of YouTube SEO power. Thanks to the great content and good optimization Sport Klub channel reached[masked] subscribers in under 18 months.",
      price: 400,
      date: "2019-12-26T13:51:50.417-07:00",
      category: "marketing",
      userId: 2,
      imageUrl: "https://pbs.twimg.com/media/EL--sgSXYAAnOX2.jpg",
    },
    {
      title: "Voice - The new Frontend",
      desc: "Nara Kasbergen knows a lot about the subject since she is the lead engineer for voice interfaces and emerging platforms at National Public Radio (NPR). We got Nara to Tinel Meetup to cover the many things she learned along the way, including what voice UI development is and isn't. We'll go over the core strategy for building a voice app for platforms like Alexa and Google using JavaScript, as well as discuss limitations of the current tech and predictions for how it will evolve in the future. Finally, she will touch upon some essential skills that a developer in this space should possess, so that you'll feel prepared to enter the voice UI space, whether you're planning to start working with it tomorrow or a decade from now.",
      price: 375,
      category: "frontend",
      date: "2020-07-02T22:00:00.000Z",
      imageUrl:
        "https://secure.meetupstatic.com/photos/event/2/d/8/e/highres_482651662.jpeg",
      userId: 4,
      id: 3,
    },
    {
      id: 4,
      title: "Fighting E-Commerce Sameness",
      desc: "Online shopping behaviour is usually based on emotion which is mostly triggered by originality and can’t be quantified by statistics. Everyone knows that, but still, there is an alarming situation happening in the world of E-commerce. Online shopping is ruled by overthought designs that are based on statistics that eventually result in every webshop being the same. At the 30th edition of Tinel that's taking place in late November, ICT županija helped us bring Julian Mollema, lead designer from one of the top Dutch digital agencies - Build in Amsterdam.",
      price: 450,
      date: "2020-02-21T13:51:50.417-07:00",
      category: "marketing",
      userId: 3,
      imageUrl:
        "https://secure.meetupstatic.com/photos/event/2/d/8/e/highres_482651662.jpeg",
    },
  ];
  return (
    <div className="ws-body">
      <h1>Workshops</h1>
      <p>Displayed:13</p>
      <div className="ws-container">
        <div className="columns is-multiline">
          {workshops.map((item) => {
            return (
              <div className="column is-4">
                <WsCard
                  img={item.imageUrl}
                  date={item.date}
                  title={item.title}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
