import React from "react";
// import Computer from '../Icons/Computer'
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
  & > p {
    padding: 0 10%;
    line-height: 165%;
  }
`;
const ELearning = ({ iconElearning, title, text }) => {
  return (
    <StyledELearning>
      <img src={iconElearning} alt="" />
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledELearning>
  );
};

export default ELearning;
