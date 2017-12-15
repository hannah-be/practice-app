import React, { Component } from 'react';
import './styles/App.css';
import Button from './components/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Practice App</h1>
       <p>Some more text to test scss</p>
       <h1> This is a heading </h1>

       <h4> These are some buttons under a sub-heading </h4>
        
        <Button title='First Button - Primary' primary= { true }/>
        <Button title='Click to become awesome'/>
        <Button title='Click here to understand git collaboration (I do not go anywhere)'/>
        
      </div>
    );
  }
}

export default App;
