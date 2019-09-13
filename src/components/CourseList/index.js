import React from 'react'
import CourseListItem from '../CourseListItem'
import styled from 'styled-components'



const StyledCourseList = styled.div`
  width: ${props => (props.courseWidth ? "100%" : props.courseWidth)};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
  padding: 10% 0;
 
`;

const CourseList = (props) => {
    return (
        <StyledCourseList {...props}>
            <CourseListItem 
            courseImg='images/rectangle2.png'
            courseLength='4h' 
            courseTitle='dans dans dans'
            courseTimeLeft='3min'
             />
        </StyledCourseList>
    )
       
}

export default CourseList
