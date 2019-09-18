import React, {useState} from 'react'
import styled from 'styled-components'
import Bookmark from '../Icons/Bookmark'

const StyledActiveCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 75vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "45vh")};
  border-radius: 10px;
  justify-content: space-between;
  position: relative;


    & > div, & > h2, & > h5 {
        padding: 0 5%;
    }

  & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5vh; 
      /* padding: 0 10%;  */
  }
    & > div:first-of-type{
        color: #C97C36;

  }


  
`;

const ActiveCourseCard = (props) => {
    const [isClicked, setClicked] = useState(false)

console.log(props)
    return (
 
        <StyledActiveCourseCard>
            <img src={props.activeCourseImg} alt={props.activeCourseAlt}/>
         
            <div>
                <h5>{props.courseCat}</h5>
                <h5>{props.courseTime}</h5>
            </div>

            <h2>{props.cardHeader}</h2>
            <h5>{props.cardParagraph}</h5>

            <div>
                <h5>{props.courseTeacher}</h5>

                <Bookmark onClick={() => setClicked(!isClicked)} isFilled={isClicked}/>

            </div>

        </StyledActiveCourseCard>

    )
}

export default ActiveCourseCard
