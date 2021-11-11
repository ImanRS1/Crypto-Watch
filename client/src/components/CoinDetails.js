import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router'


const CoinDetails = () => {
    const { id } = useParams(); 

    const [coinData, setCoinData] = useState();
    const fetchCoin = async id => {
        const coin = await axios.get(`http://localhost:5000/${id}`)
       const parser = new DOMParser();
	   const doc = parser.parseFromString(coin.data.description.en, 'text/html');
       const coinInfoText = doc.body.innerText;
        setCoinData(coinInfoText)
    }

    useEffect(() => {
        fetchCoin(id)
    });


    return (
        <DetailContainer>
            {coinData}
        </DetailContainer>
    )
}

export default CoinDetails;

const DetailContainer = styled.div`
    width: 50rem;
`
