import React, { useState } from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledImageQuestion = styled.div`
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
    padding-bottom: 20px;
    box-shadow: var(--shadow);

    h3 {
      font-weight: 600;
      color: var(--black-font);
      margin-bottom: 5px;
    }

    & > div:first-of-type {
      background-image: url(${({ image }) => image || "images/Bild.png"});
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 45%;
      border-radius: 10px 10px 0 0;
      margin-bottom: 20px;
    }

    .row {
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

    & > p,
    div:nth-of-type(2n),
    div:last-of-type {
      padding: 0 15px;
    }
  }
`;
// Test onClick in separate views, not working properly in testView with QuestionComponent above
const ImageQuestion = ({
  question,
  questionNumber,
  answerOptions,
  image,
  headerQuestion,
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
    <StyledImageQuestion image={image}>
      <div>
        <div />
        <div className="row">
          <h3>{headerQuestion || "VAD ÄR DET PÅ BILDEN?"}</h3>
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
    </StyledImageQuestion>
  );
};

export default ImageQuestion;
