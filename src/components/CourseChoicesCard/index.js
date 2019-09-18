import React from "react";
import styled from "styled-components";

const StyledCourseChoicesCard = styled.div`
  background-color: white;
  margin: 16px;
  padding: 16px;
  border-radius: 10px;

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
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  img {
    height: 36px;
    width: 100%;
    margin-bottom: 10px;
  }

  div.big-numbers {
    display: flex;
    justify-content: center;
    font-size: 36px;
  }

  icons {
    display: flex;
    justify-content: center;
  }
`;

const CourseChoicesCard = ({ lessonAmount, handInAmount, hoursAmount }) => {
  return (
    <StyledCourseChoicesCard>
      <div className="choices-card">
        <div className="choices">
          <div>
            <img className="icons" src="images/volume.png" alt="Volume" />
            <p>Lyssna</p>
          </div>
          <div>
            <img className="icons" src="images/read.png" alt="Read" />
            <p>Läs</p>
          </div>
          <div>
            <img className="icons" src="images/watch.png" alt="Watch" />
            <p>Titta</p>
          </div>
        </div>
        <hr />
        <div className="information-numbers">
          <div>
            <div className="big-numbers">{lessonAmount}</div>
            <p>lektioner</p>
          </div>
          <div>
            <div className="big-numbers">{handInAmount}</div>
            <p>inlämmingar</p>
          </div>
          <div>
            <div className="big-numbers">{hoursAmount}</div>
            <p>timmar</p>
          </div>
        </div>
      </div>
    </StyledCourseChoicesCard>
  );
};

export default CourseChoicesCard;
