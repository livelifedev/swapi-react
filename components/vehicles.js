import Tooltip from "../styles/tooltip";

const Vehicles = ({ vehList }) => {
  console.log(vehList);
  return (
    <>
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
    </>
  );
};

export default Vehicles;
