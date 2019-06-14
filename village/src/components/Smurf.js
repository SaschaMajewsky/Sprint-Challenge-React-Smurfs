import React from 'react';
import { Redirect } from 'react-router-dom'

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3><strong>{props.name}</strong></h3>
      <p><strong>{props.height}</strong> tall</p>
      <p><strong>{props.age}</strong> smurf years old</p>
      <button className="md-button" onClick={event => props.deleteSmurf(event, props.id)}>DELETE</button>
      <button className="md-button" onClick={event => showSmurf(props.id)}>SHOW</button>

    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};


function showSmurf(id) {
  return <Redirect to={`/smurf/${id}`} />
}


export default Smurf;

