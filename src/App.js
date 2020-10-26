import './App.css';
import LogginScreen from './components/logginScreen';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import LoggedIn from './components/loggedIn';

function App() {

  return (
    <Router>
       <Switch>
      <Route path="/login"  component={LogginScreen}></Route>
      <Route path="/" component={LoggedIn}></Route>
      </Switch>
      </Router>
  );
}

export default App;
