import React from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledAchievement = styled.div`
  background-color: var(--card-color);
  border-radius: 10px;
  margin: 0 auto 10px auto;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-shadow: var(--shadow);
  min-height: 80vh;

  h1 {
    color: var(--black-font);
    margin-bottom: 30px;
  }

  h3 {
    margin: 20px 0;
  }

  & > h3 {
    color: var(--dark-grey);
  }

  & > div:first-of-type {
    width: 350px;
    height: 350px;
    background-image: url("/images/Illustrations/quiz.svg");
    background-position: center;
    background-size: cover;
    margin: 0;
  }

  & > div:last-of-type {
    width: 100%;
    justify-self: flex-end;
    margin-top: auto;
  }

  h3 {
    font-weight: 600;
  }

  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Achievement = ({
  score,
  buttonPadding,
  // message,
  nextPart,
  numberOfQuestions,
  repeatQuiz
}) => {
  return (
    <StyledAchievement>
      <h1>{score === 3 ? "Bra jobbat!" : "Försök igen!"}</h1>
      <div />
      <h3>
        Du fick {score}/{numberOfQuestions} rätt!
      </h3>
      <div>
        <h3>Vill du gå vidare eller göra om?</h3>
        <div className="row">
          <QuizButton
            btnName="Gör om quiz"
            padding={buttonPadding}
            isCorrect={null}
            onClick={() => repeatQuiz()}
          />
          <QuizButton
            btnName="Nästa lektion"
            padding={buttonPadding}
            color="var(--soft-orange)"
            textColor="var(--card-color)"
            onClick={() => nextPart()}
            isCorrect={null}
          />
        </div>
      </div>
    </StyledAchievement>
  );
};

export default Achievement;
