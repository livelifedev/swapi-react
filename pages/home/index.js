import fetch from "isomorphic-unfetch";

const HomeIndexPage = () => (
  <div>
    <h1>The Home Page</h1>
  </div>
);

HomeIndexPage.getInitialProps = async () => {
  console.log("Run");
  const url = "https://swapi.co/api/films/";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default homeIndexPage;
