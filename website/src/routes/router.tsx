import * as React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomeRoute from "../views/home/index"; // Home page render
import NotFoundRoute from "./notFound";

export default class router extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomeRoute} />
          <Route path="*" component={NotFoundRoute} />
        </Switch>
      </Router>
    );
  }
}
