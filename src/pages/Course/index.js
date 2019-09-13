import React from "react";
import styled from "styled-components";
import Navbar from "../../components/Navbar";

const StyledCourse = styled.div``;

const Course = props => {
  return (
    <StyledCourse>
      <Navbar></Navbar>
      <h1>Här är kurssidan!</h1>
    </StyledCourse>
  );
};

export default Course;
