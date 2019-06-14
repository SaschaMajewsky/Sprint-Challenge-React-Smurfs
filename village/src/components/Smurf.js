import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3><strong>{props.name}</strong></h3>
      <p><strong>{props.height}</strong> tall</p>
      <p><strong>{props.age}</strong> smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

