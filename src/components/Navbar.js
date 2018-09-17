import React, { Component } from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import './css/Navbar.css';
import 'typeface-roboto';

class Navbar extends Component {
  
  render() {
    return(
      <div className='nav-root'>      
        <AppBar color='primary' position='static'>
          <Toolbar>
            <Typography className='nav-title' variant='headline' color='inherit'>
              Block Maze
            </Typography>
            <div className='nav-control'>
              <Button variant='outlined' color='secondary' size='large'>
                New Game
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

};

export default Navbar;