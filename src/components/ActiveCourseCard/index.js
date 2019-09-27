/* eslint-disable no-console */
import React, { useState } from "react";
import styled from "styled-components";
import Bookmark from "../Icons/Bookmark";

const StyledActiveCourseCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--card-color);
  width: ${props => (props.singleCard ? props.singleCard : "75vw")};
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
    width: 70vw;
    height: 100%;
    flex-direction: column;
    display: flex;
    box-shadow: var(--shadow);
    & > img {
      height: 50%;
      width: 100%;
      object-fit: cover;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
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

  .semi {
    font-weight: 600;
  }
  div:last-of-type {
    color: var(--dark-grey);
  }
  .orange {
    color: var(--soft-orange);
  }
  .progress {
    width: 70%;
    height: 5px;
    background-color: var(--soft-orange);
    margin: 0;
    position: absolute;
    top: 48.5%;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    width: 286px;
    height: 303px;

    & > a {
      width: 100%;
    }
    & > a > img {
      height: 50%;
      width: 100%;
    }
  }
`;
const ActiveCourseCard = ({
  activeCourseImg,
  activeCourseAlt,
  courseCat,
  courseTime,
  cardHeader,
  // cardParagraph,
  courseTeacher,
  // bookmark,
  // bookmarkAlt,
  padding,
  active,
  timeLeft,
  singleCard
}) => {
  const [isClicked, setClicked] = useState(false);

  return (
    <StyledActiveCourseCard padding={padding} singleCard={singleCard}>
      <a href="course/info">
        <img src={activeCourseImg} alt={activeCourseAlt} />
        {active ? <div className="progress" /> : ""}

        <div className="orange semi">
          <h5>{courseCat}</h5>
          <h5>{courseTime}</h5>
        </div>

        <h2>{cardHeader}</h2>
        {/* <h5>{cardParagraph}</h5> */}

        <div>
          {active ? (
            <h5>
              <span className="orange">{timeLeft}</span> kvar av lektion
            </h5>
          ) : (
            <h5>{courseTeacher}</h5>
          )}

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
