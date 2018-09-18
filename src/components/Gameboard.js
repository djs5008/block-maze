import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import './css/Gameboard.css';
import Tile from './Tile';

import { makeMove, resetMoves } from '../actions/actions.js';

class Gameboard extends Component {

  /**
   * Attempt a move to a desired x,y position
   * 
   * @param {number} x x-position for move
   * @param {number} y y-position for move
   */
  handleMove(x,y) {
    let status = true;

    // Make sure move has not already been made
    // (Otherwise go back)
    this.props.moves.forEach(move => {
      if (move.x === x && move.y === y) {
        status = false;
        this.goBack(x, y);
        return;
      }
    });
    if (status === false) return;

    // Check if move is connected to previous move
    // Not diagonally
    let lastMove = this.props.moves[this.props.moves.length - 1];
    if (Math.abs(lastMove.x - x) > 1 || Math.abs(lastMove.y - y) > 1 
        || (Math.abs(lastMove.y - y) + Math.abs(lastMove.x - x)) === 2) {
      return;
    }

    // Make move
    this.props.makeMove({x,y});
  }

  /**
   * Move back to a desired x,y position
   * 
   * @param {number} x The x-position to go back to
   * @param {number} y The y-position to go back to
   */
  goBack(x,y) {
    let movesRemaining = Array.from(this.props.moves);
    let lastMove = undefined;

    // Pop off until lastMove's position matches the current hovered position
    do {
      lastMove = movesRemaining[movesRemaining.length - 1];
      // Make sure we're not popping start position
      if (movesRemaining.length > 1) {
        movesRemaining.pop();
      } else break;
    } while (lastMove.x !== x || lastMove.y !== y);
    
    this.props.resetMoves(movesRemaining);
    this.props.makeMove({x,y});
  }

  /**
   * Load the Tile's into the Board
   *  row={y-position}
   *  col={x-position}
   */
  loadBoardTiles() {
    let tileWidth = this.props.boardSize.width;
    let tileHeight = this.props.boardSize.height;
    let result = [];

    // Load each row in
    let loadRow = (y) => {
      let result = [];

      for (let x = 0; x < tileWidth; x++) {
        result.push(
          <Grid key={x} item>
            <Tile row={y} col={x} onMouseOver={() => this.handleMove(x, y)} />
          </Grid>
        );          
      }

      return result;
    }

    // Load each column in
    // Columns are responsible for loading their own rows
    for (let y = 0; y < tileHeight; y++) {
      result.push(
        <Grid key={y} container direction='row'>
          { loadRow(y) }
        </Grid>
      );
    }

    return result;
  }

  render() {
    return(
      <div className='game-root'>
        <Grid className='game-grid' container direction='column' alignContent='center' alignItems='center' justify='center'>
          <Grid item>
            { this.loadBoardTiles() }
          </Grid>
        </Grid>
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    moves: state.state.gameState.moves,
    boardSize: state.state.gameState.boardSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeMove, resetMoves }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);