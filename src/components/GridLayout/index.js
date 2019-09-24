import React from "react";
import styled from "styled-components";

const StyledGridLayout = styled.div`
  height: ${props => (props.autoHeight ? props.autoHeight : "100%")};
  width: ${props => (props.widthGrid ? props.widthGrid : "100%")};
  transition: all 1s ease;
  margin: ${props => props.marginGrid};
  position: relative;
  display: ${props => (props.hidden ? "none" : "grid")};
  grid-template-columns: ${props => props.colLayout};
  grid-template-rows: ${props => props.rowLayout};
  grid-gap: ${props => (props.gridGap ? props.gridGap : "20px 0")};
  padding: ${props => (props.padding ? props.padding : "0")};
  background-color: ${props => (props.bgColor ? props.bgColor : "#F5F5F5")};
  border-radius: ${props => props.gridRadius};

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    display: ${props => props.displayDesk};
    flex-direction: ${props => props.direction};
    padding: ${props => props.paddingDesk};
    grid-gap: ${props => props.gapDesk};
  }
`;

const GridLayout = props => {
  return <StyledGridLayout {...props} />;
};

export default GridLayout;
