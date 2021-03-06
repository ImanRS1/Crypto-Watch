import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coin from "./components/Coin";
import Search from "./components/Search";
import CoinDetails from "./components/CoinDetails";
import CoinList from "./components/CoinList";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const navigate = useNavigate();

  const getSearchedCoin = (coin) => {
    setSearchedData(coin);
  };

  useEffect(() => {
    axios.get("http://localhost:5000").then((fetchedData) => {
      setApiData(fetchedData.data);
    });
  }, []);

  useEffect(() => {
    if (searchedData.length === 0) {
      return navigate(`/`);
    }
    navigate(`/${searchedData.searched}`);
  }, [searchedData]);

  const renderCoins = apiData.map((coin) => {
    return (
      <Link to={coin.id} key={uuidv4()}>
        <Coin coinData={coin} />
      </Link>
    );
  });

  return (
    <div className="App">
      <Link to={"/"}>
        <Header />
      </Link>
      <Search getSearchedCoin={getSearchedCoin} />
      <MainContainer>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/:id" element={<CoinDetails />} />
        </Routes>
        <CoinList />
        {renderCoins}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  background-color: #282c34;
  border-radius: 0.8rem;
  box-sizing: border-box;
  padding: 1rem;
  max-width: 1200px;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
