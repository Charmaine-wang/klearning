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
`;
const ELearning = ({ iconElearning }) => {
  return (
    <StyledELearning>
      <>{iconElearning}</>
      <h1>Praktisk nlärning</h1>
      <p>Genomför projekt och uppdrag som du kan nyttja i arbetslivet.</p>
    </StyledELearning>
  );
};

export default ELearning;
