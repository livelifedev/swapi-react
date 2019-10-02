import fetch from "isomorphic-unfetch";

const Characters = ({ charList }) => {
  console.log(charList);
  return (
    <>
      <h3>Characters:</h3>
      <ul>
        {charList.map(char => {
          return <li key={char.name}>{char.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Characters;
