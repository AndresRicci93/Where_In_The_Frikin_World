import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  main: {
    overflow: 'hidden',
    height: '1800px',
  },
  root: {
    width: 350,
    height: 42,
    marginTop: 140,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 22,
    border: 5,
  },
  input: {
    width: 350,
    height: 42,
    marginTop: 70,
    color: 'black',
    backgroundColor: 'white',
    fontSize: 22,
    border: 5,
    outline: 'none',
  },
  volcano: {
    width: 300,
    height: 150,
    borderRadius: 5,
    marginTop: 10,
    marginRight: 23,
    marginLeft: 26,
    boxShadow: '0px 0px 13px 0px rgba(50, 50, 50, 0.55)',
  },
  appbar: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    right: 0,
  },
  appbarMaps: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    right: 0,
  },
  wildfires: {
    marginTop: 10,
    width: 300,
    height: 150,
    borderRadius: 5,
  },
  hurricanes: {
    width: 40,
    height: 40,
  },
  fires: {
    width: 40,
    height: 40,
  },
  icon: {
    fontSize: 38,
    marginTop: 6,
    marginLeft: 10,
  },
  explorebtn: {
    marginLeft: 8,
  },
  typo: {
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: 9,
    marginLeft: 9,
  },
  exp: {
    textAlign: 'center',
    marginTop: '110px',
    fontSize: '22px',
  },
  or: {
    textAlign: 'center',
    marginTop: '80px',
    fontSize: '22px',
  },
  loader: {
    width: '52%',
    margin: '0 auto',
    padding: 5,
    height: 220,
    backgroundColor: '#F5F5F5',
    marginTop: 200,
    textAlign: 'center',
    borderRadius: 9,
  },
  toggle: {
    marginTop: 7,
  },
  paper: {
    marginTop: 15,
    margin: 23,
    width: 230,
    height: 140,
  },
  paragraph: {
    marginTop: -170,
    marginLeft: 4,
  },
});
