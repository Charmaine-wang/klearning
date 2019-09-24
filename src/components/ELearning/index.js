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

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    background-color: pink;
    flex-direction: row-reverse;
    & > div {
      width: 60%;
      & > h1 {
        text-align: left;
        font-size: 50px;
        line-height: 100%;
      }
      & > p {
        font-size: 20px;
        line-height: 165%;
        width: 70%;
        text-align: left;
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
