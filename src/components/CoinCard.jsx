<<<<<<< HEAD
import { Link } from "react-router";

const CoinCard = ({coin}) => {
    return ( 
        <Link to={`/coin/${coin.id}`}>
        <div className='coin-card'>
            <div className='coin-header'>
                <img src={coin.image} alt={coin.name} className='coin-image'/>
                <div>
                    <h2>{coin.name}</h2>
                    <p className="symbol">{coin.symbol.toUpperCase()}</p>
                </div>
            </div>
            <p>Price: €{coin.current_price.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
        </div>
        </Link>
     );
}
 
=======
import { Link } from "react-router";

const CoinCard = ({coin}) => {
    return ( 
        <Link to={`/coin/${coin.id}`}>
        <div className='coin-card'>
            <div className='coin-header'>
                <img src={coin.image} alt={coin.name} className='coin-image'/>
                <div>
                    <h2>{coin.name}</h2>
                    <p className="symbol">{coin.symbol.toUpperCase()}</p>
                </div>
            </div>
            <p>Price: €{coin.current_price.toLocaleString()}</p>
            <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
        </div>
        </Link>
     );
}
 
>>>>>>> 88ce4d2e13218c54719134b60d778fde5870fb8b
export default CoinCard;