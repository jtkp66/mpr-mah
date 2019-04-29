import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import SurveyCreate from "./surveys/SurveyCreate";
import SurveyList from "./surveys/SurveyList";
import SurveyEdit from "./surveys/SurveyEdit";
import SurveyShow from "./surveys/SurveyShow";
import SurveyDelete from "./surveys/SurveyDelete";
import history from "../history";

import Header from "./Header";
import Landing from "./Landing";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={SurveyList} />
            <Route path="/surveys/new" exact component={SurveyCreate} />

            <Route path="/surveys/edit/:id" exact component={SurveyEdit} />
            <Route path="/surveys/delete/:id" exact component={SurveyDelete} />
            <Route path="/surveys/:id" exact component={SurveyShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
