import React from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledImageQuestion = styled.div`
  height: 70vh;
  background-color: var(--card-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
  padding-bottom: 20px;

  h3 {
    font-weight: 600;
    color: var(--black-font);
    margin-bottom: 5px;
  }

  p {
  }

  & > div:first-of-type {
    background-image: url(${({ image }) => image || "images/Bild.png"});
    /* background-image: url(${props =>
      props.image ? props.image : "images/Bild.png"}); */
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
    padding: 0 20px;
  }
`;

const ImageQuestion = ({
  question,
  questionNumber,
  answerOptions,
  image,
  headerQuestion
}) => {
  return (
    <StyledImageQuestion image={image}>
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
            />
          );
        })}
      </div>
    </StyledImageQuestion>
  );
};

export default ImageQuestion;
