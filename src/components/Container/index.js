import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 94vw;
  height: auto;
  margin: 3vw auto;
`;

const Container = ({ props, children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
