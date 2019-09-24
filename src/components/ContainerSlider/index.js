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

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    justify-content: center;
    padding: ${props => props.paddingScroll};
    & > div {
      margin: 0 10px 0 0;
    }

    /* align-items: center; */
  }
`;

const ContainerSlider = props => {
  return <StyledContainerSlide {...props} />;
};

export default ContainerSlider;
