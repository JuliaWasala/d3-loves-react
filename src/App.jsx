import { useState } from "react";
import "./App.css";
import "./pokemon.css";
import pokemons from "./data";
import Card from "./components/card";
import SearchBar from "./components/searchbar";
import FilterBar from "./components/filterbar";

const maxHp = Math.max(...pokemons.map((p) => p.hp));
const maxAttack = Math.max(...pokemons.map((p) => p.attack));

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [hpRange, setHpRange] = useState({ min: 0, max: maxHp });
  const [attackRange, setAttackRange] = useState({ min: 0, max: maxAttack });

  const filteredPokemons = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchItem.toLowerCase()) &&
    pokemon.hp >= hpRange.min && pokemon.hp <= hpRange.max &&
    pokemon.attack >= attackRange.min && pokemon.attack <= attackRange.max
  );

  // want to add: heart/ favourite option+ filter. filter on type. change sorting. and finally put all these things in a sidebar. 

  return (
    <>
      <h1 className="title">Pokemon Cards</h1>
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
      <div className="card-container">
        {filteredPokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            maxHp={maxHp}
            maxAttack={maxAttack}
          />
        ))}
      </div>
    </>
  );
}

export default App;
