const Vehicles = ({ vehList }) => {
  console.log(vehList);
  return (
    <>
      <h3>Vehicles:</h3>
      <ul>
        {vehList.map(item => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Vehicles;
