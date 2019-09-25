import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledEvaluation = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  & > div:first-of-type {
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
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Evaluation = ({ header, paragraph, imgSrc, nextPart }) => {
  return (
    <StyledEvaluation>
      <h1>Feedback</h1>
      <div>
        <div className="evaluation">
          <img src={imgSrc} alt="" />
          <h2>{header}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className="row">
        {/* <Button btnName="Till översikten" buttonWidth="150px" /> */}
        <Button
          btnName="Utvärdering"
          buttonWidth="150px"
          bgColor="var(--soft-orange)"
          textColor="var(--card-color)"
          onClick={() => nextPart()}
        />
      </div>
    </StyledEvaluation>
  );
};

export default Evaluation;
