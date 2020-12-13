import React from 'react';
import Component from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      user:null
    }
  }
  
  render() {
    return (
      <div className="App">
        <div>
          Welcome!
        </div>
      </div>
      
    )
  }
  
  
}


export default App; 