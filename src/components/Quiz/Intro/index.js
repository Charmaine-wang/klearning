import React from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledIntro = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  & > div:first-of-type {
    background-color: var(--card-color);
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding: 30px;
    line-height: 165%;
    margin-bottom: 10px;
    box-shadow: var(--shadow);

    & > div,
    h3,
    p {
      margin-bottom: 15px;
    }

    & > h5,
    h3 {
      font-weight: 600;
      line-height: 135%;
    }
    & > div {
      width: 350px;
      height: 350px;
      background-image: url("/images/Illustrations/quiz.svg");
      background-position: center;
      background-size: cover;
      margin: 0;
    }
  }
`;

const Intro = ({ nextPart, numberOfQuestions }) => {
  return (
    <StyledIntro>
      <h1>3. Övning</h1>
      <div>
        <div />
        <h3>Quiz</h3>
        <p>
          Dags för ett quiz för att se om du fick med dig informationen från den
          senaste lektionen!
          <br /> Quizet består av flervalsfrågor. Markera det svar du tror är
          rätt och klicka på “svara” för att ta dig vidare.
        </p>
        <h5>
          Antal frågor: {numberOfQuestions} <br /> Beräknad tid: ca 2 min
        </h5>
      </div>
      <QuizButton
        btnName="Starta Quiz"
        buttonWidth="100%"
        margin="3px"
        fontWeight="600"
        color="var(--soft-orange)"
        textColor="var(--card-color)"
        onClick={() => nextPart()}
        isCorrect={null}
      />
    </StyledIntro>
  );
};

export default Intro;
