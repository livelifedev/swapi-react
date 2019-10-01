import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Search from "../components/search";

const IndexPage = props => {
  const [films, setFilms] = useState(props[0]);
  console.log(films);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    if (favs) {
      const list = films.map(film => {
        if (favs.indexOf(film.episode_id) > 0) {
          <li key={film.episode_id} className="fav">
            {film.title} - unFav
          </li>;
        } else {
          <li key={film.episode_id} className="nonfav">
            {film.title} - Fav
          </li>;
        }
      });
      return list;
    }
    console.log("useEffect run");
    setFilms([films[1]]);
  }, []);

  return (
    <div>
      <Search handleSearch={filmList => setFilms(filmList)} />
      <h1>Star Wars Films</h1>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>{film.title} - Fav</li>
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
