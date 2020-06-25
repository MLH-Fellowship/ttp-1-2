import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Components/Home";
import InputPage from "../Components/Input";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/input" component={InputPage} />
      </Switch>
    </div>
  );
}

export default Routes;
