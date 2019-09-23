/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import styled from "styled-components";

const StyledHandInExercise = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;

  h2:first-of-type {
    color: black;
  }
  .requirements {
    color: black;
    font-weight: bold;
  }

  .exercise-hand-in > p {
    margin: 16px 0px;
    line-height: 1.2rem;
  }

  a:first-of-type {
    text-decoration: none;
    font-size: 12px;
    color: var(--soft-orange);
  }
  .link-div {
    margin-bottom: 16px;
  }
`;

const HandInExercise = ({ header, paragraph, paragraph2 }) => {
  const exerciseRequirements = ["Helbild, ", "närbild, ", "halvbild "];

  return (
    <StyledHandInExercise>
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
            Länk till Davinici resolve
          </a>
        </div>
      </div>
    </StyledHandInExercise>
  );
};

export default HandInExercise;
