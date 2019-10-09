import React from "react";
import "./components/css/App.css";
import { Route, Switch } from "react-router-dom";
import Rail from "./components/Rail";
import Start from "./components/Start";
import Station from "./components/Station";

const App: React.FC = () => {
  return (
    <div>
      <Route exact path="/" component={Start} />
      <Switch>
        <Route path="/railway/:destination" component={Station} />
        <Route path="/railway" component={Rail} />
      </Switch>
    </div>
  );
};

export default App;
