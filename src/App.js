import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setGameState } from './actions/actions.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.setInitialGameState();
  }

  /**
   * Instantiate the initial game state
   * TODO: This will load from server at later point
   */
  setInitialGameState() {
    let gameState = {
      ...this.props.gameState,
      boardSize: { width: 5, height: 4 },
      start: { x: 3, y: 2 },
      blanks: [ { x: 4, y: 1 }, { x: 2, y: 2 } ],
      moves: [{ x: 3, y: 2 }],
    };
    this.props.setGameState(gameState);
  }

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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setGameState }, dispatch);
};

const mapStateToProps = state => {
  return {
    gameState: state.state.gameState,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
