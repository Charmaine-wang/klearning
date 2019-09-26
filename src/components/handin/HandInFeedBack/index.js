import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInFeedBack = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  & > div:first-of-type {
    box-shadow: var(--shadow);
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;

    .feedback-hand-in {
      font-size: 20px;
      width: 100%;
    }
    .feedback-hand-in > h2 {
      color: var(--black-font);
      font-size: 20px;
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

const HandInFeedBack = ({ header, nextPart, previousPart }) => {
  const [bgColor, setBgColor] = useState("var(--light-grey)");
  const availableDay = ["Torsdag 1/6", "Fredag 2/6"];
  const availableTimeMonday = ["09:30", "10:00", "10:30", "11:00"];
  const availableTimeFriday = ["09:00", "09:30", "10:00", "10:30", "11:00"];

  return (
    <StyledHandInFeedBack>
      <h1>Feedback</h1>
      <div>
        <div className="feedback-hand-in">
          <h2>{header}</h2>
          <div className="feedback-day">
            <p>{availableDay[0]}</p>
          </div>
          <Button
            onClick={() => {
              setBgColor("var(--soft-orange)");
            }}
            className="time-button"
            buttonWidth="100%"
            btnName="09:00"
          />
          <div className="time-button-div">
            {availableTimeMonday.map(data => {
              return (
                <Button
                  onClick={() => {
                    setBgColor("var(--light-grey)");
                  }}
                  textColor="var(--light-grey)"
                  className="time-button"
                  buttonWidth="100%"
                  btnName={data}
                  hoverColor="none"
                  activeColor="none"
                />
              );
            })}
          </div>
          <div className="feedback-day">
            <p>{availableDay[1]}</p>
          </div>
          <div className="time-button-div">
            {availableTimeFriday.map(data => {
              return (
                <Button
                  onClick={() => {
                    setBgColor("var(--light-grey)");
                  }}
                  textColor="var(--light-grey)"
                  className="time-button"
                  buttonWidth="100%"
                  btnName={data}
                  hoverColor="none"
                  activeColor="none"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="row">
        <Button
          btnName="Bakåt"
          buttonWidth="150px"
          onClick={() => previousPart()}
        />
        <Button
          btnName="Boka tid"
          buttonWidth="150px"
          bgColor={bgColor}
          textColor="var(--card-color)"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInFeedBack>
  );
};

export default HandInFeedBack;
