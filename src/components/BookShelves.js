import React, { useState } from 'react';
import { Tabs, Tab, makeStyles } from '@material-ui/core';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabs: {
    fontSize: '2rem',
    marginTop: '2rem',
  },
});

const BookShelves = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Router>
      <Route
        path="/"
        render={({ location }) => (
          <>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              indicatorColor="secondary"
              textColor="secondary"
              centered
            >
              <Tab label="Currently Reading" component={Link} to="/" />
              <Tab label="Want to Read" component={Link} to="/toread" />
              <Tab label="Read" component={Link} to="/read" />
            </Tabs>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <div>Currently Reading</div>}
              />
              <Route path="/toread" render={() => <div>Want to Read</div>} />
              <Route path="/read" render={() => <div>Read</div>} />
            </Switch>
          </>
        )}
      />
    </Router>
  );
};

export default BookShelves;
