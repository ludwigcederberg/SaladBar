import React from 'react';

function RangeSlider({ label, step, min, max, value, onChange }) {
    const hej = 5
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type="range"
        step= {step}
        min={min}
        max={max}
        className="form-range"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
export default RangeSlider;