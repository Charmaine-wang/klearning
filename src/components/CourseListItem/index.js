import React, {
    useState
} from 'react'
import styled from 'styled-components'

const StyledCourseListItem = styled.div `
  display: flex;
  flex-direction: row;
  background-color: blue;
  
  width: 95%;
  height: ${props => (props.expandHeight ? props.expandHeight : '13vh')};
  border-radius: 10px;
  
  > & div > p{
      
  }
`
const CourseListItem = (props) => {


    return (
        <StyledCourseListItem>
            <img src={props.courseImg} alt={props.courseAlt}/>
            <div>
            <p>{props.courseLength}</p>
            <h3>{props.courseTitle}</h3>
            <p>{props.courseTimeLeft}</p>
            </div>
        </StyledCourseListItem>
    )
}

export default CourseListItem
