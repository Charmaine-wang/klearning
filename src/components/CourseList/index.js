import React from "react";
import styled from "styled-components";
import CourseListItem from "../CourseListItem";

const StyledCourseList = styled.div`
  width: ${props => (props.courseWidth ? props.courseWidth : "100%")};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CourseList = props => {
  return (
    <StyledCourseList {...props}>
      <CourseListItem
        courseImg="images/rectangle2.png"
        courseLength="4h"
        courseTitle="dans dans dans"
        courseTimeLeft="3min"
        courseAlt="course cover"
      />
    </StyledCourseList>
  );
};

export default CourseList;
