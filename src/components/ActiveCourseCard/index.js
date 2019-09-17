import React from "react";
import styled from "styled-components";

const StyledActiveCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 75vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "45vh")};
  border-radius: 10px;
  justify-content: space-between;
  position: relative;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
  }
  & > div:first-of-type {
    color: var(--soft-orange);
  }

  h5,
  h2,
  h3,
  div > img {
    padding: 0 15px;
  }

  h2 {
    font-weight: 600;
  }
`;
const ActiveCourseCard = props => {
  return (
    <StyledActiveCourseCard>
      <img src={props.activeCourseImg} alt={props.activeCourseAlt} />

      <div>
        <h5>{props.courseCat}</h5>
        <h5>{props.courseTime}</h5>
      </div>

      <h2>{props.cardHeader}</h2>
      <h5>{props.cardParagraph}</h5>

      <div>
        <h5>{props.courseTeacher}</h5>
        <img src={props.bookmark} alt={props.bookmarkAlt} />
      </div>
    </StyledActiveCourseCard>
  );
};

export default ActiveCourseCard;
