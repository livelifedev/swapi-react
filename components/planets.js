const Planets = ({ plaList }) => {
  console.log(plaList);
  return (
    <>
      <h3>Planets:</h3>
      <ul>
        {plaList.map(item => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Planets;
