import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import SearchField from "../../components/SearchField";
import GridLayout from "../../components/GridLayout";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: ${props => (props.expandHeight ? "auto" : "100vh")};
`;

const Home = props => {
  return (
    <StyledHome>
      <Navbar />
      <StyledHome>
        <GridLayout bgColor="grey" colLayout="1fr"></GridLayout>
        <SearchField />
      </StyledHome>
    </StyledHome>
  );
};

export default Home;
