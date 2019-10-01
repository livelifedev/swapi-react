import React, { useState } from "react";

const Search = ({ films, handleSearch }) => {
  const [state, setState] = useState("");

  return (
    <form
      onSubmit={e => {
        console.log("search", state);
        e.preventDefault();
        // api request?();
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
