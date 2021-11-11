import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Done from "./components/done";
import Header from "./components/header";
import Home from "./components/home";
import {ContextComponant} from "./context/context_api";

function App() {
  return (
    <Router>
      <ContextComponant>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/done">
            <Done />
          </Route>
        </Switch>
      </ContextComponant>
    </Router>
  );
}

export default App;
