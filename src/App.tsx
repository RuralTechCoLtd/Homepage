import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Top from "./Top";
import EventList from "./details/EventList";
import EventDetails from "./details/EventDetails";
import AboutDetails from "./details/AboutDetails";
import NewsArchive from "./details/NewsArchive";
import NewsDetails from "./details/NewsDetails";
import Greeting from "./details/Greeting";
import Services from "./Services";
import AssistDetails from "./details/AssistDetails";
import EntrustedDevelopment from "./details/EntrustedDevelopment";
import PackagedApplication from "./details/PackagedApplication";
import Header from "./Header";
import Footer from "./Footer";
import "./App.scss";
import { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    document.title = `Rural Tech`;
  });
  return (
    <div className="App">
      {/* TODO h1タグはページに一つしか使用できないので、ヒーローイメージのみに使用して残りはh2以降のタグを使用。 */}
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/About/AboutDetails" component={AboutDetails} />
          <Route path="/Services" exact component={Services} />
          <Route path="/Services/EventList" exact component={EventList} />
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
