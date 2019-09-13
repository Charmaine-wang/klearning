import React from "react";
import styled from "styled-components";

const StyledCourse = styled.div`
margin-top:64px`;

const Course = props => {
  return (
    <StyledCourse>
      <h1>Här är kurssidan!</h1>
    </StyledCourse>
  );
};

export default Course;
