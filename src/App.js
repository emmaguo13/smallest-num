import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Landing from "./screens/landing"
//import 'bootstrap/dist/css/bootstrap.min.css'

//handles all the routing

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= "/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
