import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Auth, Home, Navbar } from "./components";
const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/"/>) } />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
