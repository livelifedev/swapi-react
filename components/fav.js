import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [state, setState] = useState("");
  const queryFilms = async q => {
    const url = `https://swapi.co/api/films/?search=${q}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log("results", data);
    handleSearch(data.results);
  };

  return (
    <form
      onSubmit={e => {
        console.log("search", state);
        e.preventDefault();
        queryFilms(state);
      }}
    >
      <input
        type="text"
        name="search-bar"
        id="search-bar"
        placeholder="Search films..."
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};

export default Search;
