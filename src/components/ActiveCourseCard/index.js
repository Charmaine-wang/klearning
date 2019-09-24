/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import Bookmark from "../Icons/Bookmark";

const StyledActiveCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 75vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "40vh")};
  border-radius: 10px;
  justify-content: space-between;
  position: relative;

  & > div,
  & > h2,
  & > h5 {
    padding: 0 5%;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
  }

  div:first-of-type {
    color: var(--soft-orange);
    font-weight: 600;
  }

  & > img {
    /* image should take up higher percantage of div */
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
  const [isClicked, setClicked] = useState(false);
  console.log(
    activeCourseImg,
    activeCourseAlt,
    courseCat,
    courseTime,
    cardHeader,
    cardParagraph,
    courseTeacher,
    bookmark,
    bookmarkAlt
  );

  return (
    <StyledActiveCourseCard>
      <img src={activeCourseImg} alt={activeCourseAlt} />

      <div>
        <h5>{courseCat}</h5>
        <h5>{courseTime}</h5>
      </div>

      <h2>{cardHeader}</h2>
      {/* <h5>{cardParagraph}</h5> */}

      <div>
        <h5>{courseTeacher}</h5>

        <Bookmark onClick={() => setClicked(!isClicked)} isFilled={isClicked} />
      </div>
    </StyledActiveCourseCard>
  );
};

export default ActiveCourseCard;
