import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import AboutCourse from "../../components/AboutCourse";
import CourseEpisodes from "../../components/CourseEpisodes";
import Container from "../../components/Container";

const StyledCourse = styled.div`
  margin-top: 64px;
  .button-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 0px;
  }

  .hero-image-course {
    width: 100%;
  }

  .course-choices-container {
    margin: 16px;
    color: var(--black-font);
    font-weight: 400;
  }

  .course-header {
    position: absolute;
    color: white;
    font-weight: 400;
    top: 10%;
    left: 5%;
  }

  .image-container {
    position: relative;
  }

  .image-apply-button {
    position: absolute;
    top: 80%;
    left: 30%;
  }

  h1 {
    font-weight: 400;
  }
`;

const Course = () => {
  const [courseComponent, setCourseComponent] = useState("aboutCourse");
  const [headerText, setHeaderText] = useState("Inlärningsalternativ");

  const switchComponent = () => {
    if (courseComponent === "aboutCourse") {
      return <AboutCourse />;
    }
    if (courseComponent === "courseEpisodes") {
      return <CourseEpisodes />;
    }
    return null;
  };

  return (
    <StyledCourse>
      <Container>
        <div className="image-container">
          <h1 className="course-header">Self-tape international</h1>
          <img
            className="hero-image-course"
            src="images/selftape-hero.png"
            alt="course"
          />
          <Button
            bgColor="var(--soft-orange)"
            textColor="white"
            btnName="Ansök till kurs"
            className="image-apply-button"
            border="none"
          />
        </div>
        <div className="button-container">
          <Button
            btnName="Om kurs"
            buttonWidth="45%"
            onClick={() => {
              setCourseComponent("aboutCourse");
              setHeaderText("Inlärningsalternativ");
            }}
          />
          <Button
            btnName="Kursinnehåll"
            buttonWidth="45%"
            onClick={() => {
              setCourseComponent("courseEpisodes");
              setHeaderText("Kursinnehåll");
            }}
          />
        </div>
        <div className="course-choices-container">
          <h1>{headerText}</h1>
        </div>
        <div>{switchComponent()}</div>
      </Container>
    </StyledCourse>
  );
};

export default Course;
