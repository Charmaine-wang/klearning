// import "./App.css";
import React from "react";
import GridLayout from "./components/GridLayout";
import styled from "styled-components";
import SearchField from "./components/SearchField";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Profile from "./pages/Profile";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: ${props => (props.expandHeight ? "auto" : "100vh")};
`;

const App = () => {
  return (
    <>
      {/* Jag har flyttat över detta och din css till pages/home. /Linn */}
      {/* <GlobalStyle />
      <StyledApp>
        <GridLayout bgColor="grey" colLayout="1fr"></GridLayout>
        <SearchField />
      </StyledApp> */}

      {/* Endast detta behöver vara kvar, resten sköter vi under respektive page. */}
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
