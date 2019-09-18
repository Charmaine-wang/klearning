import React from "react";
import styled from "styled-components";

const StyledCourseLesson = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    color: black;
  }

  .lesson {
  }
  .lesson-header > img {
    margin-right: 16px;
    width: 10%;
  }

  .lesson-header {
    color: black;
    display: flex;
    // justify-content:space-between;
  }
  .lesson-header > .time {
    margin-left: auto;
  }
  .time {
    color: var(--soft-orange);
  }
  .lines {
    margin: 24px 0px;
    display: ${props => (props.displayLine ? props.displayLine : "flex")};
  }
`;

const CourseLesson = ({ lessonNumber, lessonName, lessonLength }) => {
  return (
    <StyledCourseLesson>
      <div className="lesson">
        <div className="lesson-header">
          <img src="images/watch.png" alt="" />
          <p className="title">
            {lessonNumber}. {lessonName}
          </p>
          <p className="time">{lessonLength}</p>
        </div>
        <hr className="lines" />
      </div>
    </StyledCourseLesson>
  );
};

export default CourseLesson;
