import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from 'styled-components'
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000").then((fetchedData) => {
      setApiData(fetchedData.data);
    });
  }, []);

  console.log(apiData);

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
