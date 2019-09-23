import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInFeedBackConfirm = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-conent: center;
  align-items: center;

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
    color: black;
    text-align: center;
    margin: 16px;
  }

  .feedback-confirm-hand-in > h2 {
    margin: 16px;
    color: black;
  }
`;
const HandInFeedBackConfirm = ({ header, paragraph }) => {
  // take data from feedback component
  const day = "Torsdag 1/6";
  const time = "KL. 09:00";

  return (
    <StyledHandInFeedBackConfirm>
      <div className="feedback-confirm-hand-in">
        <img src="images/feedback.png" alt="" />
        <h2>{header}</h2>
        <div className="booked-time-div">
          <p>{day}</p>
          <p>{time}</p>
        </div>
        <div className="booked-time-paragraph">
          <p>{paragraph}</p>
        </div>
        <Button
          textColor="white"
          bgColor="var(--soft-orange)"
          btnName="Till skype-gruppen"
        />
      </div>
    </StyledHandInFeedBackConfirm>
  );
};

export default HandInFeedBackConfirm;
