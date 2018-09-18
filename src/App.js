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
        <Gameboard />
        <Footer/>
      </div>
    );
  }
}

export default App;
