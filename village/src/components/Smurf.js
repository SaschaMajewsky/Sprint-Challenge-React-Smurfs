import React from 'react';
import { Link } from 'react-router-dom'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3><strong>{props.name}</strong></h3>
      <p><strong>{props.height}</strong> tall</p>
      <p><strong>{props.age}</strong> smurf years old</p>
      <button className="md-button" onClick={event => props.deleteSmurf(event, props.id)}>DELETE</button>
      <Link to={`/smurf/${props.id}`} className="md-button">SHOW</Link>

    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};


export default Smurf;

