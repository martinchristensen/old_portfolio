import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import './App.css';
import Home from './pages/home';
import Integration from './pages/integration';
import Resume from './pages/resume';

function App() {
    const [expand, setExpand] = useState(window.innerWidth < 600);

  const handler = () => {
      setExpand(!expand)
  }

  return (
      <>
          <Router>
              <Navbar initialSidebar={expand} expandHandler={handler} />
              <div id={"page-container"} className={expand?"expanded":""}>
                <Switch>
                      <Route path={'/'} exact component={Home} />
                      <Route path={'/resume'} exact component={Resume} />
                      <Route path={'/integration'} exact component={Integration} />
                </Switch>
              </div>
          </Router>
      </>
  );
}

export default App;