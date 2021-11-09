import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
