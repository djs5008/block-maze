import React, { Component } from 'react';
import { connect } from 'react-redux';
import './css/Tile.css';

class Tile extends Component {

  getType() {
    let x = this.props.col;
    let y = this.props.row;
    let startX = this.props.start.x;
    let startY = this.props.start.y;
    let result = undefined;

    if (startX === x && startY === y) {
      result = 'START';
    }
    this.props.blanks.forEach(blank => {
      if (blank.x === x && blank.y === y) {
        result = 'BLANK';
      }
    });
    this.props.moves.forEach(move => {
      if (move.x === x && move.y === y) {
        result = 'MOVE';
      }
    });

    return result;
  }

  render() {
    switch (this.getType()) {
      case 'START':
        return (
          <div className={`tile-root tile-start`} onMouseOver={this.props.onMouseOver}></div>
        );
      case 'BLANK':
        return (
          <div className={`tile-root tile-gap`}></div>
        );
      case 'MOVE':
        return (
          <div className={`tile-root tile-moved`} onMouseOver={this.props.onMouseOver}></div>
        );
      default:
        return (
          <div className={`tile-root tile-normal`} onMouseOver={this.props.onMouseOver}></div>
        );
    }
  }
};

const mapStateToProps = state => {
  return {
    start: state.state.gameState.start,
    moves: state.state.gameState.moves,
    blanks: state.state.gameState.blanks,
  }
};

export default connect(mapStateToProps, null)(Tile);