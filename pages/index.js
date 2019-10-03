import React, { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Search from "../components/search";
import List from "../components/list";
import Alert from "../components/alert";
import Main from "../styles/main";

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
      <div className={"main"}>
        <h1>Star Wars Films</h1>
        <Search handleSearch={filmList => setFilms(filmList)} />

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
          .nonfav,
          .fav {
            display: flex;
            justify-content: space-between;
          }
          ul {
            padding: 0;
            width: 400px;
          }
          li {
            list-style: none;
            border-bottom: 1px solid #170f11;
            margin-top: 25px;
            padding: 0 0 4px 4px;
          }
          .fav button {
            background-color: #009432;
          }
          .nonfav button {
            background-color: #006266;
          }
          .fav button,
          .nonfav button {
            border: 1px solid gray;
            cursor: pointer;
          }
        `}</style>
      </div>
      <Main />
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
