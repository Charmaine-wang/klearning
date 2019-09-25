/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import Bookmark from "../Icons/Bookmark";

const StyledActiveCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-color);
  width: 75vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "37vh")};
  border-radius: 10px;
  /* justify-content: space-between; */
  /* position: relative; */
  padding: ${props => (props.padding ? props.padding : "0")};

  /* & > a > img { 
  width: 100%;
} */
  & > a {
    justify-content: space-between;

    position: relative;
    text-decoration: none;
    width: 100%;
    flex-direction: column;
    display: flex;
    & > img {
      height: 50%;
    }
  }
  & a > div,
  & a > h2,
  & a > h5 {
    padding: 0 5%;
    text-decoration: none;
  }

  & a > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    margin: 0;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
    color: var(--black-font);
  }

  div:first-of-type {
    color: var(--soft-orange);
    font-weight: 600;
  }
  div:last-of-type {
    color: var(--dark-grey);
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    width: 286px;
    height: 303px;
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
  bookmarkAlt,
  padding
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
    <StyledActiveCourseCard padding={padding}>
      <a href="course">
        <img src={activeCourseImg} alt={activeCourseAlt} />

        <div>
          <h5>{courseCat}</h5>
          <h5>{courseTime}</h5>
        </div>

        <h2>{cardHeader}</h2>
        {/* <h5>{cardParagraph}</h5> */}

        <div>
          <h5>{courseTeacher}</h5>

          <Bookmark
            onClick={() => setClicked(!isClicked)}
            isFilled={isClicked}
          />
        </div>
      </a>
    </StyledActiveCourseCard>
  );
};

export default ActiveCourseCard;
