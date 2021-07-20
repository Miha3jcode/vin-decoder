import './App.scss';

import {
  Switch,
  Route,
} from "react-router-dom";

import {
  Header,
} from 'components';

import Main from 'screens/Main/Main';
import Variables from 'screens/Variables/Variables';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path={'/variables'}>
          <Variables/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
