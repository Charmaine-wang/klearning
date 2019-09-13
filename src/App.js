import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Profile from "./pages/Profile";

const StyledApp = styled.div``;

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/course" component={Course} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
