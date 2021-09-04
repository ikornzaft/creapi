import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Edit } from './components/';
import './styles/main.sass';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </div>
  );
}

export default App;
