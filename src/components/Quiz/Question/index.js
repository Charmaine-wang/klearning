import React from "react";
import styled from "styled-components";

const StyledQuestion = styled.div`
  background-color: var(--card-color);
`;

const Question = () => {
  return (
    <StyledQuestion>
      <h3>Fråga</h3>
    </StyledQuestion>
  );
};

export default Question;
