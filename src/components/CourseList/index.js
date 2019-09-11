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
            courseList='01' 
            courseTitle='Dans' 
            description='hdhhdhdhdhdhdhd'/>
        </StyledCourseList>
    )
}

export default CourseList
