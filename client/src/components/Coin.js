import React from "react";
import styled from "styled-components";

const Coin = ({ coinData }) => {
  console.log(coinData);
  return (
    <CoinContainer>
      <img src={coinData.image} alt={coinData.name}/>
      <p>{coinData.name}</p>
    </CoinContainer>
  );
};

export default Coin;


const CoinContainer = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:  1rem;
  border: 1px solid silver;

  img {
    height: 2rem;
    margin: 0.5rem;
  }
`