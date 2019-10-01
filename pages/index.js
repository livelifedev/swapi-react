import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Search from "../components/search";
import List from "../components/list";
import Alert from "../components/alert";

const IndexPage = props => {
  const [films, setFilms] = useState(props[0]);
  const [favs, setFavs] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs"));
    setFavs(storedFavs || []);
  }, [toggle]);

  return (
    <>
      <Alert showAlert={showAlert} handleClose={() => setShowAlert(false)} />
      <div>
        <Search handleSearch={filmList => setFilms(filmList)} />
        <h1>Star Wars Films</h1>
        <ul className="flex">
          <List
            films={films}
            favs={favs}
            handleClick={() => setToggle(!toggle)}
            showAlert={() => setShowAlert(true)}
          />
        </ul>

        <style global jsx>{`
          .flex {
            display: flex;
            flex-direction: column;
          }
          .fav {
            order: -1;
          }
        `}</style>
      </div>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const url = "https://swapi.co/api/films/";
  const res = await fetch(url);
  const data = await res.json();

  return [data.results];
};

export default IndexPage;
