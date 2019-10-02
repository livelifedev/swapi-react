import Tooltip from "../styles/tooltip";

const Vehicles = ({ vehList }) => {
  return (
    <div>
      <h3>Vehicles:</h3>
      <ul>
        {vehList.map(item => {
          return (
            <li key={item.name}>
              <span className="tooltip">
                {item.name}
                <span className="tooltiptext">
                  Model: {item.model} Crew: {item.crew} Consumables:{" "}
                  {item.consumables}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
      <Tooltip />
    </div>
  );
};

export default Vehicles;
