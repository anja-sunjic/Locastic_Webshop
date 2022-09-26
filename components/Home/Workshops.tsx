import { ContentType } from "../../types";
import WsCard from "../UI/WsCard";

const Workshops = ({ data }: any) => {
  const number = 13;
  return (
    <div className="ws-body">
      <h1>Workshops</h1>
      <p className="small">
        Displayed: <span className="darker">{number}</span>
      </p>
      <div className="ws-container">
        <div className="columns is-multiline is-6 is-variable">
          {data.content?.map((workshop: ContentType) => {
            return (
              <div
                className="column is-4-desktop is-6-tablet is-12-mobile"
                key={`workshop_${workshop.id}`}
              >
                <WsCard workshop={workshop} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
