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
      <div className="button-container">
        <Button>Om Kurs</Button>
        <Button>Kursflöde</Button>
      </div>
      <div>
      Dynamiskt content beroende på vilken knapp som är intryckt 
      </div>
      <div className="apply-button">
        <Button>Ansök</Button>
      </div>
    </StyledCourse>
  );
};

export default Course;
