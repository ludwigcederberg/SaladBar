import React from 'react';

function SelectGenre({ id, label, options, value, onChange, required, errorMessage }) {
  return (
    <div className="form-floating">
      <select
        className="form-select"
        id={id}
        aria-label={label}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option hidden value="">
          {label}
        </option>
        {options.map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      {required && (
        <div className="invalid-feedback">{errorMessage}</div>
      )}
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default SelectGenre;
