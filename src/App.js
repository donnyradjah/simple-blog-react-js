import React, { Component } from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./components/create.component";
import Index from "./components/index.component";
import Detail from "./components/detail.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            React
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/create"} className="nav-link">
                  Create
                </Link>
              </li>
            </ul>2
          </div>
        </nav>
        <Switch>
          <Route exact path="/create" component={Create} />
          <Route exact path="/" component={Index} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
