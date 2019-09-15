import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";

const StyledCourse = styled.div`
margin-top:64px;

.tempDiv{
  display:flex;
  width: 100%;
  margin 24 px;
  background-color: white;
}

`;

const Course = props => {
  return (
    <StyledCourse>
      <h1>Här är kurssidan!</h1>
      <div className="tempDiv">yo
      <Button>FilmFilmFilm</Button>
      <Button>TV</Button>
      <Button>Film</Button>
      <Button>Film</Button>
      </div>
    </StyledCourse>
  );
};

export default Course;
