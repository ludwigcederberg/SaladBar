import React from 'react';

function SelectVideoType({id, label, onChange}) {
    const hej = 5
  return (
    <div className ="p-2 g-col-6">
        <input
            type="radio"
            name="flexRadioDefault"
            id={id}
            className="form-check-input"
            onChange={onChange}
            />
        <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  );
}
export default SelectVideoType;