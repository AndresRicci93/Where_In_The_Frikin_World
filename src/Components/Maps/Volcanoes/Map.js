import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { makeStyles } from '@material-ui/core/styles';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import Header from './Header.js';
import './Map.css';

const NATURAL_EVENT_VOLCANO = 12;

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
  },
});

const Map = ({ eventData, center, zoom }) => {
  const classes = useStyles();

  const [locationInfo, setLocationInfo] = useState(null);
  console.log(eventData);
  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === NATURAL_EVENT_VOLCANO) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              link: ev.sources[0].url,
            })
          }
        />
      );
    }
    return null;
  });

  return (
    <div className={classes.root}>
      <Header />
      <GoogleMapReact
        bootstrapURLKeys={{ key: '****************************' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 32.3265,
    lng: 10.8756,
  },
  zoom: 2,
};

export default Map;
