import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CoinDetails = () => {
    const { id } = useParams(); 

    const [coinData, setCoinData] = useState();
    const fetchCoin = async id => {
        const coin = await axios.get(`http://localhost:5000/${id}`)
        console.log(coin.data);
        setCoinData(coin.data.description.en)
    }

    useEffect(() => {
        fetchCoin(id)
    });

    return (
        <div>
            {coinData}
        </div>
    )
}

export default CoinDetails
