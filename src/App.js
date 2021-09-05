import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Edit } from 'Components';
import 'Styles/main.sass';

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
