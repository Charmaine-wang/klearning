import React from "react";
import styled from "styled-components";
import QuizButton from "../QuizButton";

const StyledAchievement = styled.div`
  background-color: var(--card-color);
  border-radius: 10px;
  height: 60vh;
  width: 90%;
  margin: 0 auto 10px auto;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;

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
    width: 100px;
    height: 100px;
    background-color: black;
  }

  & > div:last-of-type {
    width: 100%;
    justify-self: flex-end;
    margin-top: auto;

    h3 {
      font-weight: 600;
    }

    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const Achievement = ({ score, buttonPadding, message }) => {
  return (
    <StyledAchievement>
      <h1>{message}</h1>
      <div />
      <h3>Du fick {score || "siffra"}/3 rätt!</h3>
      <div>
        <h3>Vill du gå vidare eller göra om?</h3>
        <div className="row">
          <QuizButton btnName="Gör om quiz" padding={buttonPadding} />
          <QuizButton
            btnName="Nästa lektion"
            padding={buttonPadding}
            color="var(--soft-orange)"
            textColor="var(--card-color)"
          />
        </div>
      </div>
    </StyledAchievement>
  );
};

export default Achievement;
