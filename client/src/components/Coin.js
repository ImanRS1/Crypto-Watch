import React from "react";

const Coin = ({ coinData }) => {
  return (
    <div>
      <p>{coinData.name}</p>
    </div>
  );
};

export default Coin;
