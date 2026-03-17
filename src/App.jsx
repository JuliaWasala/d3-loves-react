import { useState } from "react";
import "./App.css";
import "./pokemon.css";
import pokemons from "./data";
import Card from "./components/card";
import SideBar from "./components/sidebar";

const maxHp = Math.max(...pokemons.map((p) => p.hp));
const maxAttack = Math.max(...pokemons.map((p) => p.attack));

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [hpRange, setHpRange] = useState({ min: 0, max: maxHp });
  const [attackRange, setAttackRange] = useState({ min: 0, max: maxAttack });
  const [selectedTypes, setSelectedTypes] = useState([]);

  const types=Array.from(new Set(pokemons.flatMap((p) => p.type)));

  const filteredPokemons = pokemons.filter((pokemon) => 
    pokemon.name.toLowerCase().includes(searchItem.toLowerCase()) &&
    pokemon.hp >= hpRange.min && pokemon.hp <= hpRange.max &&
    pokemon.attack >= attackRange.min && pokemon.attack <= attackRange.max &&
    (selectedTypes.length === 0 || selectedTypes.some(type => pokemon.type.includes(type)))
  );

  // want to add: heart/ favourite option+ filter. filter on type. change sorting. and finally put all these things in a sidebar. 

  return (
    <>
      <h1 className="title">Pokemon Cards</h1>
      <div className="app-container">
      <SideBar
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        setHpRange={setHpRange}
        setAttackRange={setAttackRange}
        maxHp={maxHp}
        maxAttack={maxAttack}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        types={types}
      />

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
      </div>
    </>
  );
}

export default App;
