import SpecsBar from './specsbar'
import '../App.css'
import '../pokemon.css'

const Card = ({ pokemon, maxHp, maxAttack}) => {
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

  return (
    <div className="card">
      {/* // add a little bookmark icon with the type , font color white, background color based on type */}
      <div style={{ backgroundColor: underlineColor, height: '4px', marginBottom: '8px' }} />
      <h2 >{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <SpecsBar pokemon={pokemon} maxAttack={maxAttack} maxHp={maxHp} />
    </div>
  )
}

export default Card;