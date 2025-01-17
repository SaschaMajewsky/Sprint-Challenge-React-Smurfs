import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className="title">Smurf Village</h1>
        <ul className="Smurf-List">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                deleteSmurf={this.props.deleteSmurf}
                key={smurf.id}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: []
};

export default Smurfs;
