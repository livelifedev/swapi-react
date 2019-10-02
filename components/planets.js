import Tooltip from "../components/styles/tooltip";

const Planets = ({ plaList }) => {
  console.log(plaList);
  return (
    <>
      <h3>Planets:</h3>
      <ul>
        {plaList.map(item => {
          return (
            <li key={item.name}>
              <span className="tooltip">
                {item.name}
                <span className="tooltiptext">
                  Climate: {item.climate} Diameter: {item.diameter} Population:{" "}
                  {item.population}
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

export default Planets;
