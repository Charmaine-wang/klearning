import React from "react";
import styled from "styled-components";
import Bookmark from "../Icons/Bookmark";

const StyledCourseListItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--card-color);
  align-self: flex-start;
  width: 90vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "100px")};
  border-radius: 10px;
  box-shadow: var(--shadow);

  & > a > img {
    width: 45%;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }

  & > a {
    width: 100%;
    display: flex;
    flex-direction: row;
    text-decoration: none;
  }

  /* margin: 15%; */
  & > a > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 4%;
    width: 100%;
    height: 100%;
  }
  & > a > div > div {
    display: flex;
    justify-content: space-between;
    margin: 0;
    > svg {
      /* height: 50%;
      width: 12%;
      align-self: center;
      background-color: red; */
    }
    > h5 {
      align-self: center;
      color: #6d6d6d;
    }
    & > h5:first-child {
      // color: #c97c36;
    }
    & > aside {
      width: 20px;
    }
  }
  & > a > div > p,
  h2 {
    margin: 2% 0;
  }

  & > a > div > h2 {
    color: #333333;

    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
  }

  & > a > div > p {
    color: #c97c36;

    font-size: 12px;
    line-height: 135%;
  }
  & > a > div > p:first-child {
    align-self: flex-end;
  }
  & > .progress-bar {
    width: 100%;
    height: 2vh;
    background-color: red;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    width: 330px;
    height: 100px;

    & > a > div > div > aside {
      width: 40px;
    }
  }
  .orange {
    color: orange;
  }
`;

const CourseListItem = ({
  courseImg,
  courseAlt,
  courseLength,
  courseTitle,
  active,
  timeLeft,
  courseTeacher
}) => {
  return (
    <StyledCourseListItem>
      <a href="course/info">
        <img src={courseImg} alt={courseAlt} />
        <div>
          <p>{courseLength}</p>
          <h2>{courseTitle}</h2>
          <div>
            <>
              {active ? (
                <h5>
                  <span className="orange">{timeLeft}</span> kvar av lektion
                </h5>
              ) : (
                <h5>{courseTeacher}</h5>
              )}
            </>
            {/* BOOLEAN IF PROPS.BOOKMARK or NONE */}
            <aside />
            <Bookmark />
          </div>
        </div>
      </a>
    </StyledCourseListItem>
  );
};

export default CourseListItem;
