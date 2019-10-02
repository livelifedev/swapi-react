const Characters = ({ charList }) => {
  console.log(charList);
  return (
    <>
      <h3>Characters:</h3>
      <ul>
        {charList.map(item => {
          return <li key={item.name}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Characters;
