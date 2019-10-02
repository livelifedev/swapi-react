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
                <span className="tooltiptext">Tooltip text</span>
              </span>
            </li>
          );
        })}
      </ul>
      <style jsx>{`
        .tooltip {
          position: relative;
          display: inline-block;
        }
        .tooltip .tooltiptext {
          visibility: hidden;
          min-width: 120px;
          background-color: black;
          color: #fff;
          text-align: center;
          padding: 5px 0;
          margin: -18px 0 0 -4px;
          position: absolute;
          z-index: 1;
        }
        .tooltip:hover .tooltiptext {
          visibility: visible;
        }
      `}</style>
    </>
  );
};

export default Characters;
