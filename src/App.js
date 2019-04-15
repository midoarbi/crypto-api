import React from 'react';
import CryptoCard from './components/crypto-card/index';
import EtherCard from './components/crypto-card/ther';

export default function App() {
  const coinData = {
    name: 'Bitcoin',
    symbol: 'BTC',
    image: '/btc.png'
  }
  const ethData = {
    name: 'Etheruim',
    symbol: 'ETH',
    image:'/eth.png'
  }
  console.log(coinData.image)
  return (

   
    <div>
    <div>
    <h1>BTC Price</h1>
    <CryptoCard
        name={coinData.name}
        symbol={coinData.symbol}
        logo={coinData.image}
      />
    </div>
    <div>
    <h1>ETH Price</h1>
    <EtherCard
        name={ethData.name}
        symbol={ethData.symbol}
        logo={ethData.image}
      />
    </div>
    </div>
    
  )
}
