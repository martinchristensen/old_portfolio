import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./components/navbar";
import './App.css'
import Home from './pages/home';
import Integration from './pages/integration';
import Resume from './pages/resume';

function App() {
  return (
      <>
          <Router>
              <Navbar />
              <Switch>
                  <Route path={'/'} exact component={Home} />
                  <Route path={'/resume'} exact component={Resume} />
                  <Route path={'/integration'} exact component={Integration} />
              </Switch>
          </Router>
      </>
  );
}

export default App;
