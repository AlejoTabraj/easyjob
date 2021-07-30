import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../Page/Home";
import { Alerts } from "../Page/Alerts";
import { Saved } from "../Page/Saved";
import { Jobs } from "../Page/Jobs";
import { JobDescription } from "../Page/JobDescription";
import { FooterNav } from "../Molecules/FooterNav";

const Main = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/alerts">
            <Alerts />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/jobs/1">
            <JobDescription />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
        <FooterNav />
      </Router>
    </main>
  );
};

export default Main;
