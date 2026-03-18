import { useState, useEffect } from "react";
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

  const types = Array.from(new Set(pokemons.flatMap((p) => p.type)));

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchItem.toLowerCase()) &&
      pokemon.hp >= hpRange.min &&
      pokemon.hp <= hpRange.max &&
      pokemon.attack >= attackRange.min &&
      pokemon.attack <= attackRange.max &&
      (selectedTypes.length === 0 ||
        selectedTypes.some((type) => pokemon.type.includes(type))),
  );

  const availableTypes = Array.from(new Set(filteredPokemons.flatMap((p) => p.type)));

  // would be cool to change options of type selector dynamically based on the types of the pokemons in the data. so if there are only 3 types, only show those 3 options. oh this causes loop. i forgot how this works.
  // useEffect(() => {
  //   setTypes(Array.from(new Set(filteredPokemons.flatMap((p) => p.type))));
  // }, [filteredPokemons]);


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
          availableTypes={availableTypes}
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
