import Tooltip from "../components/styles/tooltip";

const Characters = ({ charList }) => {
  console.log(charList);
  return (
    <>
      <h3>Characters:</h3>
      <ul>
        {charList.map(item => {
          return (
            <li key={item.name}>
              <span className="tooltip">
                {item.name}
                <span className="tooltiptext">
                  Birth Year: {item.birth_year} Gender: {item.gender} Height:{" "}
                  {item.height}
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

export default Characters;
