import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { withTheme } from '../../Theme/Theme.js';
import { AppBar, Typography } from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStyles } from './Styles/styles.js';
import Explore from './Explore.js';
import CountryDetail from '../CountryDetail/CountryDetail.js';
import { fetchCountries } from '../../Service/index.js';

const FlagsScreen = (props) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const classes = useStyles();

  const { darkMode, setDarkMode } = props;

  useEffect(() => {
    setLoading(true);

    const fetchAPI = async () => {
      setCountries(await fetchCountries());
      setLoading(false);
    };

    fetchAPI();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center' }}>Loading... Please wait</h1>
        <CircularProgress color='#ffcc00' style={{ marginLeft: '48%' }} />
      </div>
    );
  }

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className={classes.main}>
        <AppBar position='fixed' className={classes.appbar}>
          <FontAwesomeIcon icon={faGlobeEurope} className={classes.icon} />
          <Typography variant='h6' className={classes.typo}>
            Where in the frikin' world?
          </Typography>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.toggle}
          />
        </AppBar>
        <Explore />
        <Typography className={classes.or}>or</Typography>
        <div style={{ textAlign: 'center', marginLeft: '1px' }}>
          <input
            type='text'
            placeholder='Search for a country...'
            onChange={(e) => setSearch(e.target.value)}
            className={classes.input}
          />
        </div>

        <Grid container spacing={3} justify='center' style={{ marginTop: 100 }}>
          {filteredCountries.map((country, index) => (
            <Link
              to={`/${countries[index]._id}/data`}
              style={{ textDecorationLine: 'none' }}
            >
              <CountryDetail key={index} {...country} />
            </Link>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default withTheme(FlagsScreen);
