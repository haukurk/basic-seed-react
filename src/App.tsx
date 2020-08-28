import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CounterPage } from "./pages/CounterPage";
import { SomethingPage } from "./pages/SomethingPage";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
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
