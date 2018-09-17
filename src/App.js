import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Gameboard tileWidth={5} tileHeight={4} gaps={{1:[4],2:[1]}} start={{x:3,y:2}} />
        <Footer/>
      </div>
    );
  }
}

export default App;
