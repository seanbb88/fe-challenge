import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PartsListHome from './pages/partslisthome/PartsListHome';


function App() {
  return (
    <Switch>
      <Fragment>
        <Route exact path="/" component={PartsListHome} />
      </Fragment>
    </Switch>
  );
}

export default App;
