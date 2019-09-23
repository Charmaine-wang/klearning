import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: auto;
  width: 94vw;
  margin: auto;
  padding: ${({ padding }) => padding || "16px 0"};

  @media only screen and (min-width: 700px) {
    width: 700px;
  }
`;

const Container = ({ padding, children }) => {
  return <StyledContainer padding={padding}>{children}</StyledContainer>;
};

export default Container;
