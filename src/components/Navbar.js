import React, { Component } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import './css/Navbar.css';
import 'typeface-roboto';

class Navbar extends Component {
  
  render() {
    return(
      <div className='nav-root'>      
        <AppBar className='nav-appbar' color='primary' position='absolute'>
          <Toolbar>
            <Typography className='nav-title' variant='headline' color='inherit'>
              Block Maze
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

};

export default Navbar;