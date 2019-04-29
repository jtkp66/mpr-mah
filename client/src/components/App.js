import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SurveyCreate from "./surveys/SurveyCreate";
import SurveyList from "./surveys/SurveyList";
import SurveyEdit from "./surveys/SurveyEdit";
import SurveyShow from "./surveys/SurveyShow";
import SurveyDelete from "./surveys/SurveyDelete";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={SurveyList} />
          <Route path="/surveys/new" exact component={SurveyCreate} />
          <Route path="/surveys/edit/:id" exact component={SurveyEdit} />
          <Route path="/surveys/delete/:id" exact component={SurveyDelete} />
          <Route path="/surveys/:id" exact component={SurveyShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
