import React, { Component } from 'react';
import { NavLink, Route } from "react-router-dom";
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    console.log('I am a mounted teapot!');
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>  {
       /*  console.log("GET: ", res) */
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => console.log("GET ERR: ", err))
  }

  postSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        /* console.log("POST: ", res) */
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log("POST ERR: ", err))
  }

  deleteSmurf= (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
       /*  console.log("DEL: ", res); */
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log("DEL ERR: ", err));
  };

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav className="nav">
          <NavLink exact to="/" activeClassName="activeNavButton">Home</NavLink>
          <NavLink exact to="/smurf-form" activeClassName="activeNavButton">Form</NavLink>
        </nav>
        <Route exact path="/smurf-form" render={props => (<SmurfForm {...props} postSmurf={this.postSmurf} />)}></Route>
        <Route exact path="/" render={props => (<Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />)}></Route>
      </div>
    );
  }
}

export default App;
