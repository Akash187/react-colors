import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Palette from "../components/main/Palettee";
import Main from "../components/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper"
      >
        <Route exact path='/' component={Main}/>
        <Route exact path='/palette/:id' component={Palette}/>
      </AnimatedSwitch>
    </BrowserRouter>
  );
};

export default Router;
