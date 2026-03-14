import { useState } from 'react'
import './App.css'
import './pokemon.css'
import pokemons from './data'

const SpecsBar = ({ pokemon }) => {
  // make a progress bar for hp and attack, with different colors

  // Width should be normalise

  return (
    <div className="specs-bar">
      <div className="specs-bar-background">
      <div className="hp-bar" style={{ width: `${pokemon.hp}%` }}></div></div>
      <div className="specs-bar-background">
      <div className="attack-bar" style={{ width: `${pokemon.attack}%` }}></div></div>
    </div>
  )
}

const Card = ({ pokemon }) => {
  // add underline color based on type
  // slightly muted colors,not too bright
  const typeColor = {
    Grass: '#78C850',
    Fire: '#F08030',
    Water: '#6890F0',
    Electric: '#F8D030',
    Psychic: '#F85888',
    Normal: '#A8A878',
    Ghost: '#705898',
    Dragon: '#7038F8',
    Fighting: '#C03028',
    Rock: '#B8A038',
  };
   
  // add underline color based on type
  const underlineColor = typeColor[pokemon.type];

  // get max values of hp and attack from the pokemons array
  const maxHp = Math.max(...pokemons.map(p => p.hp));
  const maxAttack = Math.max(...pokemons.map(p => p.attack));

  // normalise hp and attack values to be between 0 and 100
  pokemon.hp = (pokemon.hp / maxHp) * 100;
  pokemon.attack = (pokemon.attack / maxAttack) * 100;
  

  return (
    <div className="card">
      {/* // add a little bookmark icon with the type , font color white, background color based on type */}
      <div style={{ backgroundColor: underlineColor, height: '4px', marginBottom: '8px' }} />
      <h2 >{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <SpecsBar pokemon={pokemon} />
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  // first I want to create some basic cards
  return (
    <>
      <div className="card-container">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}

      </div>
    </>
  )
}

export default App
