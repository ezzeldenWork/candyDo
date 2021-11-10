import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import {ContextComponant} from "./context/context_api";

function App() {
  return (
    <Router>
      <Header />
      <ContextComponant>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ContextComponant>
    </Router>
  );
}

export default App;
