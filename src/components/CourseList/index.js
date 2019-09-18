import React from "react";
import styled from "styled-components";
import CourseListItem from "../CourseListItem";

const StyledCourseList = styled.div`
  width: ${props => (props.courseWidth ? props.courseWidth : "100%")};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 10% 0; */
  /* & >  .progress-bar{
    width: 100%;
    height: 2vh;
    background-color: red;
  } */
`;

const CourseList = props => {
  //   const [isClicked, setClicked] = useState(false)

  return (
    <StyledCourseList {...props}>
      <CourseListItem
        courseImg="images/rectangle2.png"
        courseLength="4h"
        courseTitle="dans dans dans"
        courseTimeLeft="3min"
      />
      {/* <div className="progress-bar" /> */}
    </StyledCourseList>
  );
};

export default CourseList;
