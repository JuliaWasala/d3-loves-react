const SpecsBar = ({ pokemon, maxAttack, maxHp }) => {
  const hp = (pokemon.hp / maxHp) * 100;
  const attack = (pokemon.attack / maxAttack) * 100;

  // add little heart icon for hp and sword icon for attack, font color red for hp and green for attack
  return (
    <div className="specs-bar">
      <div className="specs-bar-wrapper">
        <span className="hp-bar-icon">❤️</span>
        <div className="specs-bar-background">
          <div className="hp-bar" style={{ width: `${hp}%` }}></div>
        </div>
      </div>

      <div className="specs-bar-wrapper">
        <span className="attack-bar-icon">⚔️</span>
        <div className="specs-bar-background">
          <div className="attack-bar" style={{ width: `${attack}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default SpecsBar;
