import React from "react";
import styled from "styled-components";
import Bookmark from "../Icons/Bookmark";

const StyledCourseListItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  align-self: flex-start;
  width: 85vw;
  height: ${props => (props.expandHeight ? props.expandHeight : "13vh")};
  border-radius: 10px;

  /* margin: 15%; */
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
  }
  & > div > p,
  h3 {
    margin: 2% 5%;
  }
  & > div > h3 {
    font-size: 16px;
    line-height: 135%;
  }

  & > div > p {
    color: #c97c36;
    font-size: 12px;
    line-height: 135%;
  }
  & > div > p:first-child {
    align-self: flex-end;
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
      <img src={courseImg} alt={courseAlt} />
      <div>
        <p>{courseLength}</p>
        <h3>{courseTitle}</h3>
        <div>
          <p>{courseTimeLeft} kvar av lektion</p>
          {/* BOOLEAN IF PROPS.BOOKMARK or NONE */}
          <Bookmark />
        </div>
      </div>
    </StyledCourseListItem>
  );
};

export default CourseListItem;
