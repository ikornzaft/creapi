import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Edit from './pages/edit/edit';
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
