import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import redditImg from "../images/reddit.png";

const CoinDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [coinData, setCoinData] = useState();
  const [coinHistory, setCoinHistory] = useState();

  useEffect(() => {
    const fetchCoin = async (id) => {
      const coin = await axios.get(`http://localhost:5000/${id}`);
      console.log(coin.data);
      setCoinData(coin.data);
    };
    fetchCoin(id);
    const fetchHistory = async (id) => {
      const coin = await axios.get(`http://localhost:5000/${id}/history`);
      console.log(coin.data.prices);
      setCoinHistory(coin);
    };

    fetchHistory(id);
  }, [id]);

  if (!coinData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <DetailContainer>
        <div className="first-column">
          <p id="coin-name"> {coinData.name}</p>
          <p id="coin-symbol"> {coinData.symbol.toUpperCase()}</p>
          <img src={coinData.image.large} alt={coinData.image.large} />
        </div>

        <div className="info">
          <div className="first-row">
            <div>
              <p>Current price:</p>${coinData.market_data.current_price.usd}
            </div>
            <div>
              <p>All time high:</p> ${coinData.market_data.ath.usd}
            </div>
            <div>
              <p>Change from all time high:</p>
              {Math.round(
                coinData.market_data.ath_change_percentage.usd * 100
              ) / 100}
              %
            </div>
            <div>
              <p> Total volume:</p>
              {(coinData.market_data.total_volume.usd / 1000000000).toFixed(1)}B
            </div>
          </div>
          <div className="second-row">
            <div>
              <p>Category:</p>
              {coinData.categories[0]}
            </div>
            <div>
              <p> Genesis date:</p>
              {coinData.genesis_date}
            </div>
            <div></div>
          </div>

          <div className="third-row">
            <div>
              <p>Website: </p>
              <a href={coinData.links.homepage[0]}>
                {coinData.links.homepage[0]}
              </a>
            </div>

            <a href={coinData.links.subreddit_url}>
              <img src={redditImg} alt={redditImg} />
            </a>

            <div></div>
          </div>
        </div>
      </DetailContainer>
      <ChartContainer></ChartContainer>
    </div>
  );
};

export default CoinDetails;

const ChartContainer = styled.div``;

const DetailContainer = styled.div`
  width: 50rem;
  border: 1px solid black;
  display: flex;
  color: white;
  background-color: #3a404b;

  .first-column {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: space-between;

    #coin-name {
      margin-top: 0.4rem;
      margin-bottom: 0;
      font-size: 2rem;
    }

    #coin-symbol {
      margin: 0;
    }

    img {
      margin: 1rem;
    }
    p {
    }
  }

  .info {
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .first-row {
    width: 40rem;
    display: flex;
    justify-content: space-evenly;
  }
  .second-row {
    width: 40rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .second-row div {
    display: flex;
    align-items: center;
  }

  .second-row p {
    margin-right: 0.5rem;
  }

  .third-row {
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      height: 3rem;
      width: 3rem;
      filter: grayscale(1);
    }
  }
  .third-row div {
    display: flex;
    align-items: center;
  }

  .third-row p {
    margin-right: 0.5rem;
  }
  img {
    height: 9rem;
    width: 9rem;
  }
`;
