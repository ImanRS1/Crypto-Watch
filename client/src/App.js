import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Coin from "./components/Coin";
import Search from "./components/Search";
import styled from 'styled-components'
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

function App() {
  const [apiData, setApiData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  console.log(searchedData);

  const getSearchedCoin = (coin) => {
    setSearchedData(coin);
  };

  useEffect(() => {
    axios.get("http://localhost:5000").then((fetchedData) => {
      setApiData(fetchedData.data);
    });
  }, []);

  const renderCoins = apiData.map((coin) => {
    return (
      <Link to={coin.id} key={uuidv4()}>
        <Coin coinData={coin} key={uuidv4()}/>
      </Link>
    );
  });

  return (
    <div className="App">
      <Header />
      <MainContainer>
      <Search getSearchedCoin={getSearchedCoin} />
      {renderCoins}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;

const MainContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem;
`;