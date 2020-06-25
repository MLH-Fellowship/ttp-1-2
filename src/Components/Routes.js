import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Components/Home";
import Input from "../Components/Input";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/input" component={Input} />
      </Switch>
    </div>
  );
}

export default Routes;