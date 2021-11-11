import React from "react";
import styled from "styled-components";

const Search = ({ getSearchedCoin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    getSearchedCoin({
      searched: e.target.children[0].value,
    });
    e.target.children[0].value = "";
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <button type="submit">Search</button>
      </form>
    </FormContainer>
  );
};

export default Search;

const FormContainer = styled.div`
  margin: 2rem;
`;
