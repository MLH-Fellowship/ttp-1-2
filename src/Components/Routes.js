import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Components/Home";
import Input from "../Components/Input";
import Template from "../Components/Template";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/input" component={Input} />
        <Route exact path="/template" component={Template} />
      </Switch>
    </div>
  );
}

export default Routes;