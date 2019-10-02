const Starships = ({ ssList }) => {
  console.log(ssList);
  return (
    <>
      <h3>Starships:</h3>
      <ul>
        {ssList.map(item => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Starships;
