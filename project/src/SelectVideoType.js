import React from 'react';

function SelectVideoType({id, label, checked, onChange}) {
  return (
    <div className ="p-2 g-col-6">
        <input
            type="radio"
            name="flexRadioDefault"
            id={id}
            className="form-check-input"
            checked= {checked}
            onChange={onChange}
            />
        <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  );
}
export default SelectVideoType;