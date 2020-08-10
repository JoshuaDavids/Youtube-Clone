import React from "react";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import Recommended from "./components/Recommended/Recommended";
import SearchPage from "./components/SearchPage/SearchPage";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <div className="page">
              <SideNav />
              <Recommended />
            </div>
          </Route>
          <Route exact path="/search/:searchid">
            <div className="page">
              <SideNav />
              <SearchPage />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
