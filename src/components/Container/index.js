import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: auto;
  width: ${({ width }) => width || "94vw"};
  margin: auto;
  padding: ${({ padding }) => padding || "16px 0"};

  @media only screen and (min-width: 700px) {
    width: 700px;
  }
`;

const Container = ({ padding, width, children }) => {
  return (
    <StyledContainer padding={padding} width={width}>
      {children}
    </StyledContainer>
  );
};

export default Container;
