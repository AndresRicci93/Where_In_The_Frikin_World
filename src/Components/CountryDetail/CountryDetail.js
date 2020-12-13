import React from 'react';
import { useStyles } from '../FlagsScreen/Styles/styles.js';
import Paper from '@material-ui/core/Paper';

const CountryDetail = (props) => {
  //eslint-disable-next-line
  const classes = useStyles();
  const { name, flag } = props;

  return (
    <>
      <Paper elevation={5} className={classes.paper}>
        <img src={flag} alt='' style={{ width: 230, height: 140 }} />

        <p className={classes.paragraph}>{name}</p>
      </Paper>
    </>
  );
};

export default CountryDetail;
