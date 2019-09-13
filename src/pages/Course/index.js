import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const StyledCourse = styled.div`
margin-top:64px;

.image-container{

}


`;

const Course = (props) => {
  return (
    <StyledCourse>
      <div className="image-container">
      <img src="images/courseImage.png" alt="course image"/>
      </div>
      <div className="buttonContainer">
        <Button>Om Kurs</Button>
        <Button>Kursflöde</Button>
      </div>
    </StyledCourse>
  );
};

export default Course;
