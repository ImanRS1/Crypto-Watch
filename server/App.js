const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;


const getAllCoins = async (req, res) => {
    try {
        await axios
          .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=15&page=1&sparkline=false"
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

const getCoinDetails = async (req, res) => {
    const { id } = req.params;
    try {
      const item = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      );
      res.header("Access-Control-Allow-Origin", "*").status(200).send(item.data);
    } catch (err) {
      console.error("GG", err);
    }
  };



app.get("/:id", getCoinDetails);

app.get('/', getAllCoins);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
