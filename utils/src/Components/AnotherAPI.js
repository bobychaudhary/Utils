import axios from 'axios';
import React, { useState } from 'react'

const AnotherAPI = () => {
    const [coins, setCoins] = useState([])
    useEffect(()=>{
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")
        .then(res=>{
            setCoins(res.data)
            console.log(res.data)});
        
    })
    return (
        <div>
            
        </div>
    )
}

export default AnotherAPI
const [coins, setCoins] = useState([])
