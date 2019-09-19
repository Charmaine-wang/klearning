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
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};

  @media only screen and (min-width: 700px) {
    /* Ska vi göra nånting här så slidern blir bättre inramad i desktop? */
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
const FixedContainer = props => {
  return <StyledFixedContainer {...props} />;
};

export default FixedContainer;
