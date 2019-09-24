import React from "react";
import styled from "styled-components";

const StyledEvaluation = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

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
`;

const Evaluation = ({ header, paragraph, imgSrc }) => {
  return (
    <StyledEvaluation>
      <div className="evaluation">
        <img src={imgSrc} alt="" />
        <h2>{header}</h2>
        <p>{paragraph}</p>
      </div>
    </StyledEvaluation>
  );
};

export default Evaluation;
