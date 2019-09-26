import React from "react";
import styled from "styled-components";

const StyledContainerSlide = styled.div`
  display: flex;
  position: relative;
  padding: ${props => props.padding};

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
    width: ${props => (props.widthDesk ? props.widthDesk : "100%")};
    padding: ${props => (props.paddingScroll ? props.paddingScroll : "0")};

    & > div {
      margin: ${props => (props.marginDesk ? props.marginDesk : "0 19px 0 0")};
    }

    /* align-items: center; */
  }
`;

const ContainerSlider = props => {
  return <StyledContainerSlide {...props} />;
};

export default ContainerSlider;
