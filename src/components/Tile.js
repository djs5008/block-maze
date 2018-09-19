import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Tile.css';

class Tile extends Component {

  /**
   * Get the type of tile this is
   * Used to render proper color/state information for tile
   */
  getType() {
    let x = this.props.col;
    let y = this.props.row;
    let startX = this.props.start.x;
    let startY = this.props.start.y;
    let result = undefined;

    if (startX === x && startY === y) {
      result = 'START';
    } else {
      this.props.moves.forEach(move => {
        if (move.x === x && move.y === y) {
          result = 'MOVE';
        }
      });
      if (this.props.moves.length === 
        (this.props.boardSize.width * this.props.boardSize.height) - this.props.blanks.length) {
        result = 'WON';
      }
      this.props.blanks.forEach(blank => {
        if (blank.x === x && blank.y === y) {
          result = 'BLANK';
        }
      });
    }

    return result;
  }

  /**
   * Retrieve the index of the move object related to this tile
   *  Can be used for indexing forward/backward moves
   */
  getMoveIndex() {
    let i = -1;
    let x = this.props.col;
    let y = this.props.row;
    this.props.moves.forEach((move, index) => {
      if (move.x === x && move.y === y) {
        i = index;
        return;
      }
    });
    return i;
  }

  /**
   * Retrieve the CSS class for the "coming from" connector direction
   */
  getFirstConnDir() {
    let index = this.getMoveIndex();
    let x = this.props.col;
    let y = this.props.row;

    // Make sure this isn't the first-made move
    if (index !== -1) {
      if (this.props.moves.length > 1) {
        // Check direction of previous move
        let prevMove = this.props.moves[index-1];
        if (prevMove !== undefined) {
          if (prevMove.x < x) {
            return 'tile-direction-left';
          } else if (prevMove.x > x) {
            return 'tile-direction-right';
          } else if (prevMove.y < y) {
            return 'tile-direction-up';
          } else if (prevMove.y > y) {
            return 'tile-direction-down';
          }
        }
      }
    }
    return '';
  }

  /**
   * Retreive the CSS clas for the "leading to" connector direction
   */
  getSecondConnDir() {
    let index = this.getMoveIndex();
    let x = this.props.col;
    let y = this.props.row;

    // Make sure this isn't the last-made move
    if (index !== -1) {
      if (this.props.moves.length > (index+1)) {
        // Check direction of next move
        let nextMove = this.props.moves[index+1];
        if (nextMove.x < x) {
          return 'tile-direction-left';
        } else if (nextMove.x > x) {
          return 'tile-direction-right';
        } else if (nextMove.y < y) {
          return 'tile-direction-up';
        } else if (nextMove.y > y) {
          return 'tile-direction-down';
        }
      }
    }

    return '';
  }

  render() {
    // Render proper tile type
    switch (this.getType()) {
      case 'START':
        return (
          <div>
            <div className={`${this.getFirstConnDir()}`}></div>
            <div className={`${this.getSecondConnDir()}`}></div>
            <div className={`tile-root tile-start`} onMouseOver={this.props.onMouseOver}></div>
          </div>
        );
      case 'BLANK':
        return (
          <div>
            <div className={`${this.getFirstConnDir()}`}></div>
            <div className={`${this.getSecondConnDir()}`}></div>
            <div className={`tile-root tile-gap`}></div>  
          </div>
        );
      case 'MOVE':
        return (
          <div>
            <div className={`${this.getFirstConnDir()}`}></div>
            <div className={`${this.getSecondConnDir()}`}></div>
            <div className={`tile-root tile-moved`} onMouseOver={this.props.onMouseOver}></div>
          </div>
        );
      case 'WON':
        return (
          <div>
            <div className={`${this.getFirstConnDir()}`}></div>
            <div className={`${this.getSecondConnDir()}`}></div>
            <div className={`tile-root tile-won`} onMouseOver={this.props.onMouseOver}></div>
          </div>
        );
      default:
        return (
          <div>
            <div className={`${this.getFirstConnDir()}`}></div>
            <div className={`${this.getSecondConnDir()}`}></div>
            <div className={`tile-root tile-normal`} onMouseOver={this.props.onMouseOver}></div>
          </div>
        );
    }
  }
};

const mapStateToProps = state => {
  return {
    start: state.state.gameState.start,
    moves: state.state.gameState.moves,
    blanks: state.state.gameState.blanks,
    boardSize: state.state.gameState.boardSize,
  }
};

export default connect(mapStateToProps, null)(Tile);