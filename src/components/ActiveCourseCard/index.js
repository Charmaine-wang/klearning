import React, {
    useState
} from 'react'
import styled from 'styled-components'

const StyledActiveCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 85%;
  height: ${props => (props.expandHeight ? props.expandHeight : "55vh")};
  border-radius: 10px;
  margin: 2%;
  
  & > div {
      display: flex;
      justify-content: space-between;
     
  }
    & > div:first-of-type{
        color: #C97C36;
  }
      & > div > img{
        height: 55%;
        width: 10%;
        align-self: center;
  }
  & > div, h3, h5{ padding: 0 10px;}
`;
const ActiveCourseCard = (props) => {


    return (
        <StyledActiveCourseCard>
            <img src={props.activeCourseImg} alt={props.activeCourseAlt}/>
            <div>
                <h5>{props.courseCat}</h5>
                <h5>{props.courseTime}</h5>
            </div>

            <h3>{props.cardHeader}</h3>
            <h5>{props.cardParagraph}</h5>

            <div>
                <h5>{props.courseTeacher}</h5>
                <img src={props.bookmark} alt={props.bookmarkAlt} />

            </div>

        </StyledActiveCourseCard>
    )
}

export default ActiveCourseCard
