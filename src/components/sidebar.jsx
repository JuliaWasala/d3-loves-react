import "../App.css";
import "../pokemon.css";
import SearchBar from "./searchbar";
import FilterBar from "./filterbar";
import pokemons from "../data";

const TypeSelector = ({ selectedTypes, setSelectedTypes,types }) => {
  // const types=Array.from(new Set(pokemons.flatMap((p) => p.type)));

  const toggle = (category) => {
    setSelectedTypes((prev) => {
      return prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    })
  };

  return (
    <ul
      className="type-selector"
    >
      {types.map((cat) => (
        <li key={cat}>
          <label
            className="type-option"
          >
            <input
              type="checkbox"
              checked={selectedTypes.includes(cat)}
              onChange={() => toggle(cat)}
              className="type-checkbox"
            />
            {cat}
          </label>
        </li>
      ))}
    </ul>
  );
};

const SideBar = ({ searchItem, setSearchItem, setHpRange, setAttackRange, maxHp, maxAttack, selectedTypes, setSelectedTypes, types }) => {
  return (
    <div className="sidebar">
      <SearchBar searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="filter-container">
        <FilterBar
          label="HP"
          icon="❤️"
          color="#ff6b6b"
          maxVal={maxHp}
          setRange={setHpRange}
        />
        <FilterBar
          label="Attack"
          icon="⚔️"
          maxVal={maxAttack}
          setRange={setAttackRange}
          color="#4ecdc4"
        />
      </div>
      <TypeSelector
        types={types}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
      />
    </div>
  );
};

export default SideBar;