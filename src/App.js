import "./App.css";
import React, { Component } from "react";
import GridLayout from "./components/GridLayout";
import styled from "styled-components";
import SearchField from "./components/SearchField";
import GlobalStyle from "./GlobalStyle";

const StyledApp = styled.div`
  display: flex;
  width: 100vw;
  height: ${props => (props.expandHeight ? "400px" : "10vh")};
`;

const App = () => {
  return (
    <StyledApp>
      <GlobalStyle></GlobalStyle>
      <GridLayout bgColor="grey" colLayout="1fr 1fr 1fr">
        <p>HEJ</p>
      </GridLayout>
      <SearchField />
    </StyledApp>
  );
};

export default App;
