import React from "react";
import styled from "styled-components";

const StyledCourseChoicesCard = styled.div`
  background-color: white;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;

  box-shadow: var(--shadow);

  .choices {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .information-numbers {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    color: var(--dark-grey);
  }

  .information-numbers > div {
    margin-left: 16px;
    margin-right: 16px;
  }

  .choices > div > img {
    // height: 36px;
    width: 80%;
    margin-bottom: 10px;
  }

  .choices > div {
    margin-left: 16px;
    margin-right: 16px;
  }

  div > .big-numbers {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
  }

  .number-text-pair {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .icon-div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    &.watch {
      background-image: url("/images/Ikoner/Metod/Video.svg");
    }
    &.listen {
      background-image: url("/images/Ikoner/Metod/Ljud.svg");
    }
    &.read {
      background-image: url("/images/Ikoner/Metod/Läsa.svg");
    }
  }
`;

const CourseChoicesCard = ({ lessonAmount, handInAmount, hoursAmount }) => {
  return (
    <>
      <StyledCourseChoicesCard>
        <div className="choices-card">
          <div className="choices">
            <div className="icon-div">
              <div className="icon watch" />
              <p>Titta</p>
            </div>
            <div className="icon-div">
              <div className="icon listen" />
              <p>Lyssna</p>
            </div>
            <div className="icon-div">
              <div className="icon read" />
              <p>Läs</p>
            </div>
          </div>
        </div>
      </StyledCourseChoicesCard>
      {/* <hr /> */}
      <StyledCourseChoicesCard>
        <div className="information-numbers">
          <div className="number-text-pair">
            <div className="big-numbers">{lessonAmount}</div>
            <p>Lektioner</p>
          </div>
          <div className="number-text-pair">
            <div className="big-numbers">{handInAmount}</div>
            <p>Inlämmingar</p>
          </div>
          <div className="number-text-pair">
            <div className="big-numbers">{hoursAmount}</div>
            <p>Timmar</p>
          </div>
        </div>
      </StyledCourseChoicesCard>
    </>
  );
};

export default CourseChoicesCard;
