<<<<<<< HEAD
const FilterInput = ({filter, onFilterChange}) => {
    return ( 
    <div className="filter">
        <input type="text" value={filter}
        placeholder="Filter coins by name or symbol"
        onChange={(e) => onFilterChange(e.target.value)} />
    </div> );
}
 
=======
const FilterInput = ({filter, onFilterChange}) => {
    return ( 
    <div className="filter">
        <input type="text" value={filter}
        placeholder="Filter coins by name or symbol"
        onChange={(e) => onFilterChange(e.target.value)} />
    </div> );
}
 
>>>>>>> 88ce4d2e13218c54719134b60d778fde5870fb8b
export default FilterInput;