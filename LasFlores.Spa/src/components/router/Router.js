import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DocumentsGenerator from '../fasting/DocumentsGenerator';


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <DocumentsGenerator />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;