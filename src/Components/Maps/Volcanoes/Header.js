import React from 'react';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withTheme } from '../../../Theme/Theme.js';

const useStyles = makeStyles({
  button: {
    marginTop: 19,
    marginLeft: 20,
  },

  header: {
    display: 'flex',
    textAlign: 'inline',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <header className={classes.header}>
        <Link to={`/home`} style={{ textDecorationLine: 'none' }}>
          <Button
            variant='contained'
            className={classes.button}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Link>
        <h1 style={{ marginLeft: 23 }}>Volcano Tracker Powered By NASA API</h1>
      </header>
    </>
  );
};

export default withTheme(Header);
