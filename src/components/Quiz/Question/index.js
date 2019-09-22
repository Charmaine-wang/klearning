import React from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledQuestion = styled.div`
  height: 70vh;
  background-color: var(--card-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 20px;

  h3 {
    font-weight: 600;
    color: var(--black-font);
  }

  & > div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  & > div:last-of-type {
    justify-self: flex-end;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }
`;

const Question = ({ question, questionNumber, answerOptions }) => {
  return (
    <StyledQuestion>
      <div>
        <h3>FRÅGA</h3>
        <h3>Fråga {questionNumber || "Siffra"}/3</h3>
      </div>
      <p>{question || "Här är en fråga?"}</p>
      <div>
        {answerOptions.map(option => {
          return (
            <QuizButton
              btnName={option}
              buttonWidth="100%"
              margin="3px"
              fontWeight="600"
              key={option}
            />
          );
        })}
      </div>
    </StyledQuestion>
  );
};

export default Question;
