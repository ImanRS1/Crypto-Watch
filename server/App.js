const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;


const getAllCoins = async (req, res) => {
    try {
        await axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=10&page=1&sparkline=false"
          )
          .then((data) =>
            res
              .header("Access-Control-Allow-Origin", "*")
              .status(200)
              .send(data.data)
          )
          .catch((err) => res.send(err));
      } catch (err) {
        console.error("GG", err);
      }
  };

app.get('/', getAllCoins);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
