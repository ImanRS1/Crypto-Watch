import React from "react";

const Search = ({ getSearchedCoin }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchedCoin({
      searched: e.target.children[0].value,
    });
    e.target.children[0].value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
