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
import VariableScreen from "./screens/VariableScreen/VariableScreen";

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/">
          <MainScreen/>
        </Route>
        <Route exact path={'/variables'}>
          <VariablesScreen/>
        </Route>
        <Route exact path={'/variables/:variableId'}>
          <VariableScreen/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
