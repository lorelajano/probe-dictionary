import React from 'react';


// TODO: I doubt this needs an ID.
const SelectElement = props => (
  <select className="form-control form-control-sm ml-1 mr-1"
          id={props.elementId}
          value={props.value}
          onChange={props.onChange}>
    {props.items.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
  </select>
);

export default SelectElement;
