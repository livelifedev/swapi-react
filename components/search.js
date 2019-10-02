import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [state, setState] = useState("");
  const queryFilms = async q => {
    const url = `https://swapi.co/api/films/?search=${q}`;
    const res = await fetch(url);
    const data = await res.json();
    handleSearch(data.results);
  };

  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          queryFilms(state);
        }}
      >
        <div>
          <input
            type="text"
            name="search-bar"
            id="search-bar"
            placeholder="Search films..."
            value={state}
            onChange={e => setState(e.target.value)}
          />
          <button>Search</button>
        </div>
      </form>
      <style jsx>{`
        div {
          height: 50px;
          display: flex;
          align-items: center;
        }
        input {
          width: 300px;
          height: 36px;
          font-size: 1rem;
          letter-spacing: 2px;
          padding-left: 5px;
        }
        button {
          height: 40px;
          margin-left: 4px;
          font-size: 0.8rem;
          padding: 10px;
          border-radius: 2px;
          background-color: #170f11;
          border: none;
          color: #ffffff;
          letter-spacing: 1px;
        }
      `}</style>
    </>
  );
};

export default Search;
