import React from "react";
import styled from "styled-components";

const StyledFixedContainer = styled.div`
  display: flex;
  position: relative;
  width: auto;
  height: ${props => props.heightContainer};
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    padding: ${props => props.paddingFixed};
  }
`;
const FixedContainer = props => {
  return <StyledFixedContainer {...props} />;
};

export default FixedContainer;
