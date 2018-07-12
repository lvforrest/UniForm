import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from '../../components/Logo';
//import 'typeface-roboto';
import './home.css';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  div: {
    textAlign: 'center',
  },
});

// ===============================================
// BODY
// ===============================================


function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div id="landingPage">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Logo />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h1 id="loginTitle">Uniform</h1>
            <h3 id="loginSubheading">Just like magic.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <button type="button" class="btn"  >Log In</button>
            <button type="button" class="btn"  >Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===============================================
// Login Button Style Override
// ===============================================





export default withStyles(styles)(CenteredGrid);