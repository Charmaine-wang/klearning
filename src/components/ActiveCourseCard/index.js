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
const ActiveCourseCard = ({
  activeCourseImg,
  activeCourseAlt,
  courseCat,
  courseTime,
  cardHeader,
  cardParagraph,
  courseTeacher,
  bookmark,
  bookmarkAlt
}) => {
  return (
    <StyledActiveCourseCard>
      <img src={activeCourseImg} alt={activeCourseAlt} />

      <div>
        <h5>{courseCat}</h5>
        <h5>{courseTime}</h5>
      </div>

      <h2>{cardHeader}</h2>
      <h5>{cardParagraph}</h5>

      <div>
        <h5>{courseTeacher}</h5>
        <img src={bookmark} alt={bookmarkAlt} />
      </div>
    </StyledActiveCourseCard>
  );
};

export default ActiveCourseCard;
