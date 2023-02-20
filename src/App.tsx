import React, { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import ScrollToTop from "./ScrollToTop";
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
import KidsProgramingSchool from "./details/Kids";
import Hosting from "./details/Hosting";
import JavaScript from "./details/JavaScript";
import Homepage from "./details/Homepage";
import Git from "./details/Git";

const App: React.FC = () => {
  useEffect(() => {
    document.title = `Rural Tech`;
  }, []);
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/AboutDetails" component={AboutDetails} />
          <Route path="/EventList" exact component={EventList} />
          <Route path="/EventList/EventDetails" component={EventDetails} />
          <Route path="/News/Archive" component={NewsArchive} />
          <Route path="/News/Details" component={NewsDetails} />
          <Route path="/Greeting" component={Greeting} />
          <Route path="/Assist" component={AssistDetails} />
          <Route
            path="/EntrustedDevelopment"
            component={EntrustedDevelopment}
          />
          <Route path="/PackagedApplication" component={PackagedApplication} />
          <Route path="/Git" component={Git}></Route>
          <Route path="/Kids" component={KidsProgramingSchool}></Route>
          <Route path="/Hosting" component={Hosting}></Route>
          <Route path="/JavaScript" component={JavaScript}></Route>
          <Route path="/Homepage" component={Homepage}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
