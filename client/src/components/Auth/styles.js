import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  paper: {
    marginTop: "10px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: "20px",
  },
  root: {
    '& .MuiTextField-root': {
      margin: "10px",
    },
  },
  avatar: {
    margin: "10px",
    backgroundColor:"deeppink"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: "20px",
  },
  submit: {
    margin: "10px 1px",
  },
  googleButton: {
    margin: "10px 1px",
  },
}));