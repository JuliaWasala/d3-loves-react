import "../App.css";
import "../pokemon.css";
import SearchBar from "./searchbar";
import FilterBar from "./filterbar";
import TypeSelector from "./typeselector";

const SideBar = ({ searchItem, setSearchItem, setHpRange, setAttackRange, maxHp, maxAttack, selectedTypes, setSelectedTypes, types, availableTypes }) => {
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
        availableTypes={availableTypes}
      />
    </div>
  );
};

export default SideBar;