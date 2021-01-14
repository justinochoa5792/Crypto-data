import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./component/Home";
import List from "./component/List";
import Charts from "./component/Charts.jsx";
import Header from "./component/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/list" component={List} />
        <Route exact path="/charts" component={Charts} />
      </Switch>
    </div>
  );
};

export default App;
