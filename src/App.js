import './App.scss';

import {
  Switch,
  Route,
} from "react-router-dom";

import {
  Header,
} from 'components';

import MainScreen from 'screens/MainScreen/MainScreen';
import VariablesScreen from 'screens/VariablesScreen/VariablesScreen';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>
        <Route path={'/variables'}>
          <VariablesScreen/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
