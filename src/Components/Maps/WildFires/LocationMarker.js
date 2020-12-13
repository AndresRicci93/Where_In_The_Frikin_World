import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wildfire: {
    fontSize: 27,
    color: 'red',
  },
});

const LocationMarker = ({ lat, lng, onClick }) => {
  const classes = useStyles();

  return (
    <div className='location-marker' onClick={onClick}>
      <FontAwesomeIcon icon={faFire} className={classes.wildfire} />
    </div>
  );
};

export default LocationMarker;
