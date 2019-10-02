import Tooltip from "../styles/tooltip";

const Starships = ({ ssList }) => {
  console.log(ssList);
  return (
    <>
      <h3>Starships:</h3>
      <ul>
        {ssList.map(item => {
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

export default Starships;
