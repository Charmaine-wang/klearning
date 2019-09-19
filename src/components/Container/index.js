import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  height: auto;
  width: 94vw;
  margin: auto;
  padding: ${props => (props.padding ? props.padding : "16px 0")};

  @media only screen and (min-width: 700px) {
    width: 700px;
  }
`;

const Container = ({ props, children }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
