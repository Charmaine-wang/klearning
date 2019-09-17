import React from 'react'
import styled from 'styled-components'

const StyledCourseListItem = styled.div `
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  align-self: flex-start;
  width: 85vw;
  height: ${props => (props.expandHeight ? props.expandHeight : '13vh')};
  border-radius: 10px;
  
  /* margin: 15%; */
  & > div{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width:50%;
      height:100%;
  }
    & > div > div {
      display: flex;
      justify-content: space-between;
      margin: 0 5%;
       > img {
        height: 50%;
        width: 12%;
        align-self: center;
       }
     
  }
  & > div > p, h3 {
      margin: 2% 5%;
  }
  & >div >h3 {
    font-size: 16px;
     line-height: 135%;
  }

      & > div > p{
    color: #C97C36;
     font-size: 12px;
     line-height: 135%;
  }
    & > div > p:first-child{
      align-self: flex-end;
  }
`
const CourseListItem = (props) => {


    return (
        <StyledCourseListItem>
            <img src={props.courseImg} alt={props.courseAlt}/>
            <div>
                <p>{props.courseLength}</p>
                <h3>{props.courseTitle}</h3>
                <div>
                    <p>{props.courseTimeLeft} kvar av lektion</p>
    {/*BOOLEAN IF PROPS.BOOKMARK or NONE */}
                    <img src={props.bookmark} alt={props.bookmarkAlt} />

                </div>
            </div>
        </StyledCourseListItem>
    )
}

export default CourseListItem
