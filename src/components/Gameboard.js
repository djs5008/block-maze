import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './css/Gameboard.css';
import Tile from './Tile';

class Gameboard extends Component {

  GameBoard(props) {
    this.props = props;
  }

  loadBoardTiles() {
    let tileWidth = this.props.tileWidth;
    let tileHeight = this.props.tileHeight;
    let gaps = this.props.gaps||{};
    let start = this.props.start||{};
    let result = [];

    let loadRow = (y) => {
      let result = [];

      for (let x = 0; x < tileWidth; x++) {
        result.push(
          <Grid key={x} item>
            <Tile row={y} col={x} start={start.x === x && start.y === y} gap={gaps[y] && gaps[y].includes(x)} />
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

export default Gameboard;