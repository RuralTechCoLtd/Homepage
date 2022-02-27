import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import Footer from "./Footer";

import Top from "./Top";
import EventList from "./details/EventList";
import EventDetails from "./details/EventDetails";
import AboutDetails from "./details/AboutDetails";
import NewsArchive from "./details/NewsArchive";
import NewsDetails from "./details/NewsDetails";
import Greeting from "./details/Greeting";
import AssistDetails from "./details/AssistDetails";
import EntrustedDevelopment from "./details/EntrustedDevelopment";
import PackagedApplication from "./details/PackagedApplication";

import "./App.scss";

const App: React.FC = () => {
  useEffect(() => {
    document.title = `Rural Tech`;
  });
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/AboutDetails" component={AboutDetails} />
          <Route path="/Services" component={Services} />
          <Route path="/Services/EventList" component={EventList} />
          <Route
            path="/Services/EventList/EventDetails"
            component={EventDetails}
          />
          <Route path="/News/Archive" component={NewsArchive} />
          <Route path="/News/Details" component={NewsDetails} />
          <Route path="/Greeting" component={Greeting} />
          <Route path="/Services/Assist" component={AssistDetails} />
          <Route
            path="/Services/EntrustedDevelopment"
            component={EntrustedDevelopment}
          />
          <Route
            path="/Services/PackagedApplication"
            component={PackagedApplication}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
