import React from "react";
import Landing from "./landing";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from "react-redux";

import Home from "./home";
import Profile from "./profile";
import { auth } from "./_reducers/auth";
import { getAuth } from "./_actions/auth";

class Routers extends React.Component {
  componentDidMount() {
    this.props.autoAuth();
  }
  render() {
    console.log("aut", this.props.authenticated);
    const { authenticated } = this.props;
    return (
      <Router>
        {!authenticated ? (
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Redirect to="/" />{" "}
          </Switch>
        ) : (
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Redirect to="/home" />{" "}
          </Switch>
        )}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    autoAuth: () => dispatch(getAuth())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
