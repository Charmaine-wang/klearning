import React from "react";
import styled from "styled-components";
import Bookmark from "../Icons/Bookmark";

const StyledCourseListItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--card-color);
  align-self: flex-start;
  width: 85vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "13vh")};
  border-radius: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
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
    > h5 {
      align-self: center;
    }
  }
  & > div > p,
  h2 {
    margin: 2% 5%;
  }
  & > div > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 135%;
  }

  & > div > p {
    color: var(--soft-orange);
    font-size: 12px;
    line-height: 135%;
  }
  & > div > p:first-child {
    align-self: flex-end;
  }
  & > .progress-bar {
    width: 100%;
    height: 2vh;
    background-color: red;
  }
`;

const CourseListItem = ({
  courseImg,
  courseAlt,
  courseLength,
  courseTitle,
  courseTimeLeft
  // bookmark,
  // bookmarkAlt
}) => {
  // const [isClicked, setClicked] = useState(false)

  return (
    <StyledCourseListItem>
      {/* <div className=""> */}
      <img src={courseImg} alt={courseAlt} />
      <div>
        <p>{courseLength}</p>
        <h2>{courseTitle}</h2>
        <div>
          <h5>{courseTimeLeft} kvar av lektion</h5>
          {/* BOOLEAN IF PROPS.BOOKMARK or NONE */}
          <Bookmark />
        </div>
      </div>
      {/* </div> */}
      {/* <div className="progress-bar" /> */}
    </StyledCourseListItem>
  );
};

export default CourseListItem;
