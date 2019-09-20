import React from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledAchievement = styled.div`
  background-color: var(--card-color);
  border-radius: 10px;
  /* margin-bottom: 10px; */
  height: 60vh;
  width: 90%;
  margin: 0 auto 10px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--black-font);
  }

  & > div:first-of-type {
    width: 100px;
    height: 100px;
    background-color: black;
  }
  & > div:last-of-type {
    display: flex;
    flex-direction: row;
  }
`;

const Achievement = ({ score, buttonPadding }) => {
  return (
    <StyledAchievement>
      <h1>Bra jobbat!</h1>
      <div />
      <h3>Du fick {score || "siffra"} av 3 rätt!</h3>
      <h3>Vill du gå vidare eller göra om?</h3>
      <div>
        <QuizButton btnName="Gör om quiz" padding={buttonPadding} />
        <QuizButton btnName="Nästa lektion" padding={buttonPadding} />
      </div>
    </StyledAchievement>
  );
};

export default Achievement;
