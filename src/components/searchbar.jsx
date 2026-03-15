import '../pokemon.css';


const SearchBar = ({ searchItem, setSearchItem }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search for a pokemon..."
      value={searchItem}
      onChange={(e) => setSearchItem(e.target.value)}
    />
  );
};


export default SearchBar;