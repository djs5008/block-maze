import React, { Component } from 'react';
import './css/Tile.css';

class Tile extends Component {

  Tile(props) {
    this.props = props;
  }

  render() {
    if (this.props.start) {
      return (
        <div className={`tile-root tile-start`}>

        </div>
      );
    } else if (this.props.gap) {
      return (
        <div className={`tile-root tile-gap`}>

        </div>
      );
    } else {
      return (
        <div className={`tile-root tile-normal`}>
        
        </div>
      );
    }
  }

};

export default Tile;