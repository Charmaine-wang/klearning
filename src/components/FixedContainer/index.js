import React from "react";
import styled from "styled-components";
// import ContainerSlider from '../ContainerSlider';

const StyledFixedContainer = styled.div`
  display: flex;
  position: relative;
  width: auto;
  height: ${props => props.heightContainer};
  overflow-x: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const FixedContainer = props => {
  return <StyledFixedContainer {...props} />;
};

export default FixedContainer;
