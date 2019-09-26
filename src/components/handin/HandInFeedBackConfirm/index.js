import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInFeedBackConfirm = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }
  & > div:first-of-type {
    box-shadow: var(--shadow);
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .feedback-confirm-hand-in {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .booked-time-div > p {
      margin: 8px 0px;
    }
    .booked-time-paragraph {
      color: var(--black-font);
      text-align: center;
      margin: 16px;
    }

    .feedback-confirm-hand-in > h2 {
      margin: 16px;
      color: var(--black-font);
    }
  }
  .grow {
    flex-grow: 1;
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const HandInFeedBackConfirm = ({
  header,
  paragraph,
  nextPart,
  previousPart
}) => {
  // take data from feedback component
  const day = "Torsdag 1/6";
  const time = "KL. 09:00";

  return (
    <StyledHandInFeedBackConfirm>
      <h1>Feedback</h1>
      <div>
        <div className="feedback-confirm-hand-in">
          <img src="/images/Communication.png" alt="" />
          <h2>{header}</h2>
          <div className="booked-time-div">
            <p>{day}</p>
            <p>{time}</p>
          </div>
          <div className="booked-time-paragraph">
            <p>{paragraph}</p>
          </div>
        </div>
      </div>
      <div className="grow"> </div>
      <div className="row">
        <Button
          btnName="Bakåt"
          buttonWidth="150px"
          onClick={() => previousPart()}
        />
        <Button
          btnName="Fortsätt"
          buttonWidth="150px"
          bgColor="var(--soft-orange)"
          textColor="var(--card-color)"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInFeedBackConfirm>
  );
};

export default HandInFeedBackConfirm;
