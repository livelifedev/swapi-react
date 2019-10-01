import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

const IndexPage = props => {
  const [films] = useState(props[0]);
  console.log(films);

  return (
    <div>
      <h1>The Main Page</h1>
      {/* <h1>{}</h1> */}
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const url = "https://swapi.co/api/films/";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  return [data.results];
};

export default IndexPage;
