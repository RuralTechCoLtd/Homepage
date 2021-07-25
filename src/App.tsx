import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Top from "./Top";
import Event from "./Event";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/event">イベントページ</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route path="/" component={Top} exact />
          <Route path="/event" component={Event} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
