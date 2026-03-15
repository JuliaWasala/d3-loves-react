import { Range } from "react-range";
import { useState } from "react";
import "../pokemon.css";

const RangeSlider = ({
  label,
  icon,
  min,
  max,
  values,
  onChange,
  color,
}) => (
  <div className="filter-row">
    <label>
      {icon} {label}{" "}
      <span>
        {values[0]} – {values[1]}
      </span>
    </label>
    <Range
      min={min}
      max={max}
      values={values}
      onChange={onChange}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          key={props.key}
          className="range-track"
          style={{
            ...props.style,
            background: `linear-gradient(
        to right,
        lightgray ${(values[0] / max) * 100}%,
        ${color} ${(values[0] / max) * 100}%,
        ${color} ${(values[1] / max) * 100}%,
        lightgray ${(values[1] / max) * 100}%
      )`,
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div {...props} key={props.key} className="range-thumb" />
      )}
    />
  </div>
);

const FilterBar = ({ label, icon, maxVal, setRange, color }) => {
  const [values, setValues] = useState([0, maxVal]);

  const handleChange = (newValues) => {
    setValues(newValues);
    setRange({ min: newValues[0], max: newValues[1] });
  };

  return (
    <div className="filter-bar">
      <RangeSlider
        label={label}
        icon={icon}
        min={0}
        max={maxVal}
        values={values}
        onChange={handleChange}
        color={color}
      />
    </div>
  );
};


export default FilterBar;