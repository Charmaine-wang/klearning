import React, {
    useState
} from 'react'
import styled from 'styled-components'

const StyledCourseListItem = styled.div `
  display: flex;
  flex-direction: row;
  background-color: blue;
  width: 100%;
  height: ${props => (props.expandHeight ? '400px' : '10vh')};
`
const CourseListItem = (props) => {


    return (
        <StyledCourseListItem>
            <img src={props.courseImg} alt={props.courseImg}/>
            <div>
            <p>{props.courseLength}</p>
            <h3>{props.courseTitle}</h3>
            <p>{props.courseTimeLeft}</p>
            </div>
        </StyledCourseListItem>
    )
}

export default CourseListItem
