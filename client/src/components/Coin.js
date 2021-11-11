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
    </CoinContainer>
  );
};

export default Coin;

const CoinContainer = styled.div`
  width: 40rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
  border: 1px solid silver;

  img {
    height: 2rem;
    margin: 0.5rem;
  }
`;

const BasicInfo = styled.div`
  display: flex;
`;

const NameHolder = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;

  p {
    margin: 0;
    font-size: 1.6rem;
  }
  #coin-name {
    font-size: 0.7rem;
  }
`;
