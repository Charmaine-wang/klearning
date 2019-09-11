import React from 'react'
import CourseListItem from '../CourseListItem'
import styled from 'styled-components'

const StyledCourseList = styled.div`
  width: ${props => (props.courseWidth ? "100%" : props.courseWidth)};
  height: 100%;
  background-color: red;
`;

const CourseList = (props) => {
    return (
        <StyledCourseList {...props}>
            <CourseListItem 
            courseImg='img'
            courseLength='4h' 
            courseTitle='dans dans dans'
            courseTimeLeft='bla'/>
        </StyledCourseList>
    )
       
}

export default CourseList
