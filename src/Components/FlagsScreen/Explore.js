import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { useStyles } from './Styles/styles.js';
import { Link } from 'react-router-dom';
import volcano from '../../assets/volcano.gif';
import wildfires from '../../assets/wildfires.gif';
import hurricanes from '../../assets/hurricanes.gif';

const Explore = () => {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.exp}>Explore...</Typography>
      <div
        style={{
          textAlign: 'center',
          marginTop: 30,
        }}
      >
        <Grid container justify='center'>
          <Link to={`/volcanoes`} style={{ textDecorationLine: 'none' }}>
            <img src={volcano} className={classes.volcano} alt='' />
          </Link>
          <Link
            to={`/cyclones`}
            style={{
              textDecorationLine: 'none',

              borderRadius: 5,
            }}
          >
            <img src={hurricanes} className={classes.volcano} alt='' />
          </Link>
          <Link
            to={`/wildfires`}
            style={{
              textDecorationLine: 'none',

              borderRadius: 5,
            }}
          >
            <img src={wildfires} className={classes.volcano} alt='' />
          </Link>
        </Grid>
      </div>
    </>
  );
};

export default Explore;
