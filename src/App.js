import './App.scss';

import {
  Switch,
  Route,
} from "react-router-dom";

import Main from 'screens/Main/Main';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
