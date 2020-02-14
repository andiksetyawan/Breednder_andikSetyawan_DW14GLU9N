import React from "react";
import Landing from "./landing";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home";
import Profile from "./profile";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
