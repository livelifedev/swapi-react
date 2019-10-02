import Tooltip from "../styles/tooltip";

const Species = ({ specList }) => {
  console.log(specList);
  return (
    <>
      <h3>Species:</h3>
      <ul>
        {specList.map(item => {
          return (
            <li key={item.name}>
              <span className="tooltip">
                {item.name}
                <span className="tooltiptext">
                  Classification: {item.classification} Average Height:{" "}
                  {item.average_height} Average Lifespan:{" "}
                  {item.average_lifespan}
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

export default Species;
