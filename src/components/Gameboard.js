import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import './css/Gameboard.css';
import Tile from './Tile';

import { makeMove } from '../actions/actions.js';

class Gameboard extends Component {

  loadBoardTiles() {
    let tileWidth = this.props.tileWidth;
    let tileHeight = this.props.tileHeight;
    let result = [];

    let loadRow = (y) => {
      let result = [];

      for (let x = 0; x < tileWidth; x++) {
        result.push(
          <Grid key={x} item>
            <Tile row={y} col={x} 
              onMouseOver={() => this.props.makeMove({x, y})} 
            />
          </Grid>
        );          
      }

      return result;
    }

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
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ makeMove }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gameboard);