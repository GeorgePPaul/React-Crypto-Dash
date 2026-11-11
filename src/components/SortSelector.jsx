<<<<<<< HEAD
const SortSelector = ({sortBy, onSortChange}) => {
    return ( 
        <div className="controls">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="market_cap_desc">Market Cap (High to Low)</option>
                <option value="market_cap_asc">Market Cap (Low to High)</option>
                <option value="price_desc">Price Cap (High to Low)</option>
                <option value="price_asc">Price Cap (Low to High)</option>
                <option value="change_desc">24h Change (High to Low)</option>
                <option value="change_asc">24h Change (Low to High)</option>
            </select>
        </div>
     );
}
 
=======
const SortSelector = ({sortBy, onSortChange}) => {
    return ( 
        <div className="controls">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                <option value="market_cap_desc">Market Cap (High to Low)</option>
                <option value="market_cap_asc">Market Cap (Low to High)</option>
                <option value="price_desc">Price Cap (High to Low)</option>
                <option value="price_asc">Price Cap (Low to High)</option>
                <option value="change_desc">24h Change (High to Low)</option>
                <option value="change_asc">24h Change (Low to High)</option>
            </select>
        </div>
     );
}
 
>>>>>>> 88ce4d2e13218c54719134b60d778fde5870fb8b
export default SortSelector;