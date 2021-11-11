import React from "react";
import styled from "styled-components";

const Coin = ({ coinData }) => {
  console.log(coinData);

  return (
    <CoinContainer>
      <BasicInfo>
        <img src={coinData.image} alt={coinData.name} />
        <NameHolder>
          <p>{coinData.symbol.toUpperCase()}</p>
          <p id="coin-name">{coinData.name}</p>
        </NameHolder>
      </BasicInfo>
      <p>${coinData.current_price}</p>
      <p>${(coinData.market_cap / 1000000000).toFixed(1)} B</p>

      <p>${coinData.low_24h}</p>
      <p>${coinData.high_24h}</p>
      <p>{Math.round(coinData.price_change_percentage_24h * 100) / 100}%</p>
      <p>${coinData.ath}</p>
    </CoinContainer>
  );
};

export default Coin;

const CoinContainer = styled.div`
  width: 50rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: start;
  margin: 0.4rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid silver;

  &:hover {
    background-color: #31363f;
  }

  img {
    height: 2rem;
    margin: 0.5rem;
  }

  p {
    margin: 0.5rem;
    align-self: center;
  }
`;

const BasicInfo = styled.div`
  display: flex;
`;

const NameHolder = styled.div`
  display: grid;
  flex-direction: column;
  align-self: start;

  p {
    margin: 0;
    font-size: 1.6rem;
  }
  #coin-name {
    font-size: 0.7rem;
  }
`;
