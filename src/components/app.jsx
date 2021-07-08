import React, {useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Menu from './menu.jsx';
import Home from './home.jsx';
import UrlBuilder from './url-builder.jsx'

export default function App() {

  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return(
    <Router className='main-content'>
      <Menu/>
      <hr/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/url-builder'>
          <UrlBuilder/>
        </Route>
      </Switch>
    </Router>
  );
}
