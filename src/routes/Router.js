import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Palette from "../components/main/Palettee";
import Main from "../components/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route exact path='/palette/:id' component={Palette}/>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
