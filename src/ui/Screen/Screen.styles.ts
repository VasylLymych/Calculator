import {makeStyles} from '@material-ui/core/styles';

const useStyles: Function = makeStyles(() => ({
  root: {
    height: '50px',
    width: '380px',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '30px',
    border: '10px solid black',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}));

export default useStyles;