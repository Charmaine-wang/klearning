import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import AboutCourse from "../../components/AboutCourse";
import CourseEpisodes from "../../components/CourseEpisodes";

const StyledCourse = styled.div`
  margin-top: 64px;
  .button-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 0px;
  }

  img {
    width: 100%;
  }

  .course-choices-container {
    margin: 16px;
    color: black;
    font-weight: 400;
  }

  .course-header {
    position: absolute;
    color: white;
    font-weight: 400;
    top: 10%;
    left: 5%;
  }

  .apply-button {
    // position:absolute;
  }
  h1 {
    font-weight: 400;
  }

  .apply-button {
    // position:absolute;
  }
`;

const Course = () => {
  const [courseComponent, setCourseComponent] = useState("aboutCourse");

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
      <div className="image-container">
        <h1 className="course-header">
          Kursnamnet är här, bästa danslektionen ever
        </h1>
        <img src="images/courseImage.png" alt="course" />
        {/* <Button className="apply-button">Ansök till kurs</Button> */}
      </div>
      <div className="button-container">
        <Button
          btnName="Om kurs"
          buttonWidth="45%"
          onClick={() => setCourseComponent("aboutCourse")}
        />
        <Button
          btnName="Kursavsnitt"
          buttonWidth="45%"
          onClick={() => setCourseComponent("courseEpisodes")}
        />
      </div>
      <div className="course-choices-container">
        <h1>Kursalternativ</h1>
      </div>
      <div>{switchComponent()}</div>
    </StyledCourse>
  );
};

export default Course;
