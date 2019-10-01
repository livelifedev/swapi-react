import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Search from "../components/search";

const IndexPage = props => {
  const [films, setFilms] = useState(props[0]);
  console.log(films);

  return (
    <div>
      <Search handleSearch={filmList => setFilms(filmList)} />
      <h1>Star Wars Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
    </div>
  );
};

IndexPage.getInitialProps = async () => {
  const url = "https://swapi.co/api/films/";
  const res = await fetch(url);
  const data = await res.json();

  console.log("run");

  return [data.results];
};

export default IndexPage;
