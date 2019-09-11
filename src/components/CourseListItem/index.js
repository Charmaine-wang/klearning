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

    const [isExpanded, setExpanded] = useState(false)


    return (
        <StyledCourseListItem >
            <h1>{props.courseList}</h1>
            <div>
            <h3>{props.courseTitle}</h3>
            <p>{props.description}</p>
            </div>
        </StyledCourseListItem>
    )
}

export default CourseListItem
