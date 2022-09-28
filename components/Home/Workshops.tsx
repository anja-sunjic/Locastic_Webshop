import { ContentType } from "../../types";
import { SingleWsInterface } from "../../interfaces";
import WsCard from "../UI/WsCard";

const Workshops = ({ data, cart, setCart }: SingleWsInterface) => {
  return (
    <div className="ws-body">
      <h1>Workshops</h1>
      <p className="small">
        Displayed: <span className="darker">{data.content.length}</span>
      </p>
      <div className="ws-container">
        <div className="columns is-multiline is-6 is-variable">
          {data.content?.map((workshop: ContentType, index: number) => {
            return (
              <div
                className="column is-4-desktop is-6-tablet is-12-mobile"
                key={`workshop_${index}`}
              >
                <WsCard workshop={workshop} cart={cart} setCart={setCart} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Workshops;
