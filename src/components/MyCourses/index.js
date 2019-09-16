import React from "react";
import styled from "styled-components";
import FixedContainer from "../FixedContainer";
import Container from "../Container";

const StyledMyCourses = styled.div``;

const MyCourses = props => {
  return (
    <StyledMyCourses>
      <Container>
        <FixedContainer></FixedContainer>
      </Container>
    </StyledMyCourses>
  );
};

export default MyCourses;
