import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CounterPage } from "./pages/CounterPage";
import { SomethingPage } from "./pages/SomethingPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/something">Something</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/something">
            <SomethingPage />
          </Route>
          <Route path="/">
            <SomethingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
