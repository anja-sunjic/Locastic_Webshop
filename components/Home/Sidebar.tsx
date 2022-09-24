import { useState } from "react";

const Sidebar = (props: any) => {
  const [selected, setSelected] = useState([]);
  const categories = ["marketing", "backend", "frontend", "design"];
  return (
    <div className={`sidebar home`}>
      <div className="inner">
        <div className="columns is-gapless mb-0">
          <div className="column is-1"></div>
          <div className="column">
            <p className="small">Filter by category:</p>
          </div>
        </div>

        <div className="filters-list">
          <div className="filter-single">
            <div className="columns is-gapless">
              <div className="column is-1"></div>
              <div className="column">
                <p>All</p>
              </div>
            </div>
          </div>
          {categories.map((item, index) => {
            return (
              <div
                className="filter-single selected"
                key={index}
                // onClick={() => {
                //   setSelected((prev) => [...prev, "item"]);
                // }}
              >
                <div className="columns is-gapless">
                  <div className="column is-1">
                    <div className="left">
                      <img src={`/icons/${item}.svg`} alt="" />
                    </div>
                  </div>
                  <div className="column">
                    <p>{item}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
