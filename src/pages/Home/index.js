import React from "react";
import styled from "styled-components";
// import SearchField from "../../components/SearchField";
import FixedContainer from "../../components/FixedContainer";
import GridLayout from "../../components/GridLayout";
import CourseList from '../../components/CourseList'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: ${props => (props.expandHeight ? "auto" : "100vh")};
  margin-top: 74px;
    /* overflow-x: hidden; */


  
`;

const Home = props => {
  return (
    <StyledHome expandHeight>
      <GridLayout>

        <h2>Mina ktiva Kurser</h2>
        <CourseList courseWidth />
        <h2>Aktiva biblotek</h2>
        <FixedContainer />

      </GridLayout>
    </StyledHome>
  );
};

export default Home;
