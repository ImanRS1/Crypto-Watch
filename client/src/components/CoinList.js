import React from 'react'
import styled from 'styled-components'

const CoinList = () => {
    return (
        <CoinListContainer>
            <p>Coin</p>
            <p>Price</p>
            <p>Market Cap</p>
            <p>Volume 24h</p>
            

        </CoinListContainer>
    )
}

export default CoinList


const CoinListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40rem;
    background-color: gray;
`