import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInFeedBack = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;

  .feedback-hand-in {
    width: 100%;
  }
  .feedback-hand-in > h2 {
    font-size: 20px;
    color: var(--black-font);
  }
  & > div:first-of-type {
    margin: 16px;
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;

    .feedback-hand-in {
      width: 100%;
    }
    .feedback-hand-in > h2 {
      color: var(--black-font);
    }

    .feedback-day > p {
      margin: 16px 0px;
      color: var(--black-font);
    }

    .feedback-day {
      // display:flex;
      // justify-content: center:
    }

    .time-button-div {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .time-button {
      margin: 8px 0px;
    }
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HandInFeedBack = ({ header, nextPart }) => {
  const availableDay = ["Torsdag 1/6", "Fredag 2/6"];
  const availableTime = ["09:00", "09:30", "10:00", "10:30", "11:00"];

  return (
    <StyledHandInFeedBack>
      <h1>Inlämning</h1>
      <div>
        <div className="feedback-hand-in">
          <h2>{header}</h2>
          <div className="feedback-day">
            <p>{availableDay[0]}</p>
          </div>
          <div className="time-button-div">
            {availableTime.map(data => {
              return (
                <Button
                  className="time-button"
                  buttonWidth="100%"
                  btnName={data}
                />
              );
            })}
          </div>
          <div className="feedback-day">
            <p>{availableDay[1]}</p>
          </div>
          <div className="time-button-div">
            {availableTime.map(data => {
              return (
                <Button
                  className="time-button"
                  buttonWidth="100%"
                  btnName={data}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <Button btnName="Till översikten" buttonWidth="150px" />
        <Button
          btnName="Nästa Lektion"
          buttonWidth="150px"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInFeedBack>
  );
};

export default HandInFeedBack;
