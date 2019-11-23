import React from 'react';
import './App.css';
import { Typography, makeStyles } from '@material-ui/core';
import BookShelves from './components/BookShelves';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  header: {
    fontWeight: 600,
    marginTop: '2rem',
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} align="center" variant="h3">
        MyReads
      </Typography>
      <BookShelves />
    </div>
  );
}

export default App;
