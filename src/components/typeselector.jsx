import "../App.css";
import "../pokemon.css";
const TypeSelector = ({ selectedTypes, setSelectedTypes, types, availableTypes }) => {


  const toggle = (category) => {
    setSelectedTypes((prev) => {
      return prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];
    });
  };
  // make types not in available types greyed out and not clickable.

  return (
    <ul className="type-selector">
      {types.map((cat) => (
        <li key={cat}>
          <label className={`type-option`}>
            <input
              type="checkbox"
              checked={selectedTypes.includes(cat)}
              onChange={() => toggle(cat)}
              className="type-checkbox"
              disabled={!availableTypes.includes(cat)}
            />
            {cat}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TypeSelector;
