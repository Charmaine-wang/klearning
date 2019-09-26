import React, { useState } from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledQuestion = styled.div`
  margin-bottom: 10px;
  & > div:first-of-type {
    height: 70vh;
    background-color: var(--card-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
    padding: 20px 15px;
    box-shadow: var(--shadow);

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
  }
`;

// Works fine! Test same thing in ImageQuestionComponent.
const Question = ({
  question,
  questionNumber,
  answerOptions,
  correctAnswer,
  nextPart,
  updateScore
}) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [next, setNext] = useState(null);

  function checkAnswer() {
    if (selectedAnswer === correctAnswer) {
      setIsCorrect(true);
      setNext(true);
      updateScore();
    } else {
      setIsCorrect(false);
      setNext(true);
    }
  }

  return (
    <StyledQuestion>
      <div>
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
                value={option}
                isCorrect={option === selectedAnswer ? isCorrect : null}
                onClick={() => setSelectedAnswer(option)}
              />
            );
          })}
        </div>
      </div>
      <QuizButton
        btnName={next ? "Nästa fråga" : "Svara"}
        buttonWidth="100%"
        margin="3px"
        fontWeight="600"
        isCorrect={null}
        onClick={() => (next ? nextPart() : checkAnswer())}
      />
    </StyledQuestion>
  );
};

export default Question;
