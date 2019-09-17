import React from "react";
import styled from "styled-components";

const StyledTempCourseCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  width: 94vw;
  height: 13vh;
  border-radius: 10px;
  margin: 10px auto;
  /* & > div {
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
    font-weight: 600;
    width: 40vw;
  }

  & > div > p {
    color: #c97c36;
    font-size: 12px;
    line-height: 135%;
  }
  & > div > p:first-child {
    align-self: flex-end;
  } */

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;

    & > p {
      align-self: flex-end;
      color: var(--soft-orange);
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h2 {
      font-size: 16px;
      font-weight: 600;
      max-width: 70%;
    }
  }

  .icon {
    width: 20px;
    height: 20px;
    /* margin-right: 10px;
    margin-bottom: 10px; */
  }
`;
const TempCourseCard = props => {
  return (
    <StyledTempCourseCard>
      <img src={props.courseImg} alt={props.courseAlt} />
      <div>
        <p>{props.courseLength}</p>
        <h2>{props.courseTitle}</h2>
        <div>
          <p>{props.courseCreator}</p>
          <img className="icon" src="images/search.png" alt="checkbox" />
        </div>
      </div>
    </StyledTempCourseCard>
  );
};

export default TempCourseCard;