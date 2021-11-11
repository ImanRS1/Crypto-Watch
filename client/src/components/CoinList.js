import React from 'react'
import styled from 'styled-components'

const CoinList = () => {
    return (
        <CoinListContainer>
            <p>Coin</p>
            <p>Price</p>
            <p>Market Cap</p>
            <p>Low 24h</p>
            <p>High 24h</p>
            <p>Change 24h</p>
            <p>ATH</p>
            

        </CoinListContainer>
    )
}

export default CoinList


const CoinListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-align: start;
    justify-content: space-between;
    width: 50rem;
    border-bottom: 1px solid silver;
    padding: 0.5rem;
    box-sizing: border-box;

    p{
        margin: 0.5rem;
    }
`