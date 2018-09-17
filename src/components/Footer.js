import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './css/Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className='footer-root'>
        <Typography className='footer-content' variant='caption'>
          Copyright &copy; { new Date().getFullYear() } DankNet
        </Typography>
      </div>
    );
  }

};

export default Footer;