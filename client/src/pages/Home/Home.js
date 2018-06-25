import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Logo from '../../components/Logo';
import 'typeface-roboto';
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
    <div>
      <Grid container spacing={24}>
      {/* Logo */}
        <Grid item xs={12}>
          <Logo />
        </Grid>
         {/* Text */}
        <Grid item xs={12}>
        <Typography variant="display1">uniform</Typography><Typography variant="subheading">Just like magic.</Typography>
        </Grid>
        {/* Login Button */}
        <Grid item xs={12}>
        <Button variant="contained" style={loginStyle} className={classes.button} id='loginButton'>
        Login
      </Button>
        </Grid>
        {/* Sign Up Button */}
        <Grid item xs={12}>
        <Button variant="contained" style={signupStyle}  className={classes.button} id='signupButton'>
        Sign Up
      </Button>
        </Grid>
      </Grid>
    </div>
  );
}

// ===============================================
// Login Button Style Override
// ===============================================

const loginStyle = {
  background: '#00dbff',
  borderRadius: 3,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

// ===============================================
// Sign Up Button Style Override
// ===============================================

const signupStyle = {
  background: '#f590fb',
  borderRadius: 3,
  border: 0,
  color: 'background-color: #00dbff;',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);