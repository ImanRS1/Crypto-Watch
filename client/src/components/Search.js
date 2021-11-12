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
        <input type="text" required placeholder="Search a coin..." />
        <button type="submit">Search</button>
      </form>
    </FormContainer>
  );
};

export default Search;

const FormContainer = styled.div`
  margin: 2rem;

  input {
    padding: 0.5rem 0.5rem;
    width: 15rem;
    border: none;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
    &:focus {
      outline: none;
    }
  }
  button {
    font: black;
    padding: 0.5rem 0;
    border: none;
    width: 5rem;
    border-top-right-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`;
