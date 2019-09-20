import React from "react";
import styled from "styled-components";

const StyledImageQuestion = styled.div`
  background-color: var(--card-color);
`;

const ImageQuestion = () => {
  return (
    <StyledImageQuestion>
      <h3>Vad är på bilden?</h3>
    </StyledImageQuestion>
  );
};

export default ImageQuestion;
