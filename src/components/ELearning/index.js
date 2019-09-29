import React from "react";
import styled from "styled-components";

const StyledELearning = styled.div`
  height: 100%;
  width: 100%;
  margin: 10% 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  text-align: center;
  & > h1 {
    font-size: 16px;
    font-weight: 600;
  }
  & > div > p {
    padding: 0 10%;
    line-height: 165%;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    & > div {
      width: 100%;
      & > h1 {
        text-align: center;
        font-size: 24px;
        line-height: 100%;
      }
      & > p {
        font-size: 16px;
        line-height: 165%;
        width: 100%;
        text-align: center;
      }
    }
  }
`;
const ELearning = ({ iconElearning, title, text }) => {
  return (
    <StyledELearning>
      <img src={iconElearning} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </StyledELearning>
  );
};

export default ELearning;
