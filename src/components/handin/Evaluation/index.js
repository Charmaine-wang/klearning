import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../../Button";

const StyledEvaluation = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  h1 {
    margin-bottom: 10px;
  }
  & > div:first-of-type {
    box-shadow: var(--shadow);
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    .evaluation {
      text-align: center;
      margin: 16px 0px;
      line-height: 1.7em;
    }
    .evaluation > h2 {
      font-size: 20px;
      margin-bottom: 16px;
    }
    .evaluation > p {
    }
  }
  .grow {
    flex-grow: 1;
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;

const Evaluation = ({ header, paragraph, imgSrc }) => {
  return (
    <StyledEvaluation>
      <h1>Utvärdering</h1>
      <div>
        <div className="evaluation">
          <img src={imgSrc} alt="illustration" />
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="grow" />
      <div className="row">
        {/* <Button btnName="Till översikten" buttonWidth="150px" /> */}
        <NavLink to="/">
          <Button
            btnName="Utvärdering"
            buttonWidth="150px"
            bgColor="var(--soft-orange)"
            textColor="var(--card-color)"
          />
        </NavLink>
      </div>
    </StyledEvaluation>
  );
};

export default Evaluation;
