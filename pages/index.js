import fetch from "isomorphic-unfetch";

const IndexPage = () => (
  <div>
    <h1>The Main Page</h1>
  </div>
);

IndexPage.getInitialProps = async () => {
  const url = "https://swapi.co/api/films/";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  return {
    //   shows: data.map(entry => entry.show)
  };
};

export default IndexPage;
