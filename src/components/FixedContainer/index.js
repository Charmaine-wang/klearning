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
    ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    /* justify-content: ${props => props.justifyDesk}; */

    /* align-items: center; */
  }


`;
const FixedContainer = props => {
  return <StyledFixedContainer {...props} />;
};

export default FixedContainer;
