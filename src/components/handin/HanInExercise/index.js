/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInExercise = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  & > div:first-of-type {
    margin: 16px;
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;

    h2:first-of-type {
      color: var(--black-font);
    }
    .requirements {
      color: var(--black-font);
      font-weight: bold;
    }

    .exercise-hand-in > p {
      margin: 16px 0px;
      line-height: 1.7em;
    }
    .exercise-hand-in > h2 {
      font-size: 20px;
    }

    a:first-of-type {
      text-decoration: none;
      color: var(--soft-orange);
    }
    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const HandInExercise = ({ header, paragraph, paragraph2, nextPart }) => {
  const exerciseRequirements = ["Helbild, ", "närbild, ", "halvbild "];

  return (
    <StyledHandInExercise>
      <h1>Inlämning</h1>
      <div>
        <div className="exercise-hand-in">
          <h2>{header}</h2>
          <p>
            {paragraph}
            {exerciseRequirements.map(data => {
              return <span className="requirements">{data}</span>;
            })}
          </p>
          <p>{paragraph2}</p>
          <div className="link-div">
            <a
              className="link"
              href="https://www.blackmagicdesign.com/products/davinciresolve/"
              rel="noopener noreferer"
              target="_blank"
            >
              Länk till Davinci resolve
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <Button btnName="Till översikten" buttonWidth="150px" />
        <Button
          btnName="Nästa Lektion"
          buttonWidth="150px"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInExercise>
  );
};

export default HandInExercise;
