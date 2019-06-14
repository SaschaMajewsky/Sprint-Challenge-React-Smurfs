import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.postSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form className="smurf-form" onSubmit={this.addSmurf}>
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <button className="md-button" type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
