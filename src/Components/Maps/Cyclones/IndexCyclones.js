import { useState, useEffect } from 'react';
import Map from './Map.js';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const IndexCyclones = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      .then((res) => {
        const data = res.data.events;

        setEventData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: '100px' }}>
        <h1 style={{ textAlign: 'center' }}>Loading... Please wait</h1>
        <CircularProgress color='#ffcc00' style={{ marginLeft: '48%' }} />
      </div>
    );
  }
  return <div>{<Map eventData={eventData} />}</div>;
};

export default IndexCyclones;
