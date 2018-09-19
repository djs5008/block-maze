import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/MovePath.css';

class MovePath extends Component {

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
  getFirstPathDir() {
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
  getSecondPathDir() {
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
    return (
      <div>
        <div className={`${this.getFirstPathDir()}`}></div>
        <div className={`${this.getSecondPathDir()}`}></div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  moves: state.state.gameState.moves,
});

export default connect(mapStateToProps, null)(MovePath);