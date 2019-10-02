const Species = ({ specList }) => {
  console.log(specList);
  return (
    <>
      <h3>Species:</h3>
      <ul>
        {specList.map(item => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Species;
