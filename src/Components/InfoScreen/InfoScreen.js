import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import { withTheme } from '../../Theme/Theme.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import CsvDownload from 'react-json-to-csv';
import { fetchCountry } from '../../Service/index.js';

import { useStyles } from './Styles/styles.js';

const InfoScreen = ({ match }) => {
  const [chartData, setChartData] = useState({});
  const [json, setJson] = useState('');
  const [info, setInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const id = match.params.id;

  const classes = useStyles();

  const chart = async () => {
    let popGrow = [];
    let year = [];

    await axios.get(`http://localhost:3002/pop-chart`).then((res) => {
      const data = res.data;
      console.log(data);

      let newList = [];
      //eslint-disable-next-line
      let filterChart = data.filter((item) =>
        //eslint-disable-next-line
        item.Country_Id == id ? newList.push(item) : null
      );

      console.log(newList);

      setJson(newList);

      for (const dataObj of newList) {
        popGrow.push(parseInt(dataObj.Value));
        year.push(parseInt(dataObj.Year));
      }
    });

    setChartData({
      labels: year,
      datasets: [
        {
          label: 'population',
          data: popGrow,
          backgroundColor: ['rgba(75,192,192,0.6)'],
          borderWidth: 4,
          width: 500,
        },
      ],
    });
  };

  useEffect(() => {
    setLoading(true);

    const fetchAPI = async () => {
      setInfo(await fetchCountry(id));

      setLoading(false);
    };
    fetchAPI();
    chart();

    //eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center' }}>Loading... Please wait</h1>
        <CircularProgress color='#ffcc00' style={{ marginLeft: '48%' }} />
      </div>
    );
  }

  return (
    <>
      <div className={classes.rootinfo}>
        <Link to={`/home`} style={{ textDecorationLine: 'none' }}>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Link>

        <Grid
          container
          className={classes.grid}
          direction='row'
          spacing={2}
          justify='center'
        >
          <div>
            <img src={info.flag} alt='' className={classes.img} />
            <h1 className={classes.title}>{info.name}</h1>
            <div className={classes.lang}>
              <p className={classes.desc}>Native Name:</p>
              <h2 className={classes.name}> {info.name}</h2>
            </div>
            <div className={classes.value}>
              <p className={classes.desc}>Capital:</p>
              <h2 className={classes.name}> {info.capital}</h2>
            </div>
            <div className={classes.value}>
              <p className={classes.desc}>Region:</p>
              <h2 className={classes.name}> {info.region}</h2>
            </div>
            <div className={classes.value}>
              <p className={classes.desc}>Currencies:</p>
              <h2 className={classes.name}> {info.currency}</h2>
            </div>
            <div className={classes.value}>
              <p className={classes.desc}>top-level:</p>
              <h2 className={classes.name}>{info.toplevel}</h2>
            </div>
            <div className={classes.lang}>
              <p className={classes.desc}>Languages:</p>
              <h2 className={classes.name}> {info.language1}</h2>
              <h2 className={classes.name}> {info.language2}</h2>
              <h2 className={classes.name}> {info.language3}</h2>
            </div>
          </div>
        </Grid>
        <br />
        <br />
        <br />
        <Grid
          style={{ maxWidth: '70vw', marginTop: '270px', margin: '0 auto' }}
        >
          <p style={{ marginTop: '250px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            magna elit, euismod et ultricies a, congue sit amet nisl. Aenean
            sodales gravida dignissim. Morbi turpis nibh, interdum ut gravida
            id, mattis et risus. Integer pulvinar, risus at porttitor lacinia,
            nunc ligula aliquam sapien, in dictum dui nibh eget velit. Aliquam
            eget tellus nec nisi fringilla consectetur. Nam nisi sapien,
            ullamcorper ac bibendum a, elementum eget nisl. Vestibulum eleifend
            hendrerit risus, ac ullamcorper odio convallis eget. Sed cursus dui
            a aliquet finibus. Sed a orci ornare, rhoncus mi a, hendrerit elit.
            Donec quis odio at ligula fermentum tristique. Integer sem metus,
            convallis nec neque sit amet, vulputate tristique est. Etiam viverra
            lorem purus, at scelerisque tellus volutpat vel. Morbi vel nunc
            tortor.
          </p>
        </Grid>
        <div
          style={{
            marginBottom: '1000',
            width: '70vw',
            margin: 'auto',
          }}
        >
          <Grid>
            <Line
              className={classes.chart}
              data={chartData}
              options={{
                responsive: true,
                title: { text: 'POPULATION GROWTH', display: true },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                      },
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
            <h1 style={{ fontSize: 17 }}>Download:</h1>

            <CsvDownload
              style={{
                textDecoration: 'none',
                border: '  #fff',
                backgroundColor: 'transparent',
                padding: 4.5,
                outline: 'none',
                cursor: 'pointer',
              }}
              data={json}
            >
              <Button>CSV</Button>
            </CsvDownload>

            <Button
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(json)
              )}`}
              download='pop-growth.json'
            >
              JSON
            </Button>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default withTheme(InfoScreen);
