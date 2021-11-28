import React from 'react'

const Chart =  ({coinHistory}) => {
    const initData = coinHistory.data.prices;
    console.log(initData);
    let removedData = 0;
    initData.forEach(data => {
        removedData = data.shift();
        console.log(removedData);
    } )

    console.log(initData);
    
    return (
        <div>
            
        </div>
    )
}

export default Chart
