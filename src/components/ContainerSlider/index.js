import React from "react";
import styled from "styled-components";

const StyledContainerSlide = styled.div`
  display: flex;
  position: relative;
  /* width: auto; */
  flex-direction: ${props => props.column};
  width: 100%;
  height: 100%;
  align-items: center;
  & > div {
    height: ${props => props.height};
    margin: 0 4% 0 0;
    & > div {
      margin: ${props => props.marginBetween};
    }
  }
  /* background-color:pink; */
`;

const ContainerSlider = props => {
  return <StyledContainerSlide {...props} />;
};

export default ContainerSlider;
