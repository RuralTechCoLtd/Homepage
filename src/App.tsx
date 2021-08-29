import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Top from "./Top";
import Event from "./Event";
import EventList from "./details/EventList";
import EventDetails from "./details/EventDetails";
import AboutDetails from "./details/AboutDetails";
import Services from "./Services";
import Header from "./Header";
import Footer from "./Footer";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
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
          <Route path="/About/AboutDetails" component={AboutDetails} />
          <Route path="/Services" exact component={Services} />
          <Route path="/" exact component={Top} />
          <Route path="/Services/EventList" exact component={EventList} />
          <Route
            path="/Services/EventList/EventDetails"
            component={EventDetails}
          />
          <Route />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
