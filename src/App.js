// import "./App.css";
import React from "react";
import GridLayout from "./components/GridLayout";
import styled from "styled-components";
import SearchField from "./components/SearchField";
import GlobalStyle from "./styles/GlobalStyle";

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
      <GlobalStyle />
      <StyledApp>
        <GridLayout bgColor="grey" colLayout="1fr"></GridLayout>
        <SearchField />
      </StyledApp>
    </>
  );
};

export default App;
