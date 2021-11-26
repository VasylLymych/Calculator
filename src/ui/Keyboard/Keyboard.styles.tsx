import {makeStyles} from '@material-ui/core/styles';

const useStyles: () => any = makeStyles(() => ({
  root: {
    height: '450px',
    width: '400px',
    backgroundColor: 'black',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& div': {
      height: '50px',
      width: '120px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      backgroundColor: 'gray',
      color: 'white',
      fontSize: '30px',
      transition: '0.3s',
      '&:hover': {
        color: 'red'
      }
    }
  }
}));

export default useStyles;