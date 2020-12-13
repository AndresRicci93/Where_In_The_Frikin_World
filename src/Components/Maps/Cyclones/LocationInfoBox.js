import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  infobox: {
    position: 'absolute',
    top: 140,
    right: 50,
    width: 600,
    color: 'black',
    minHeight: 175,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

const LocationInfoBox = ({ info }) => {
  const classes = useStyles();
  return (
    <div className={classes.infobox}>
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        <Link
          onClick={() => {
            window.open(`${info.link}`);
          }}
          style={{ textDecorationLine: 'none' }}
        >
          LINK: <strong>{info.link}</strong>
        </Link>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
