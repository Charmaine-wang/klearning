import React from "react";
import styled from "styled-components";

const StyledChevronLeft = styled.svg`
  path {
  }
`;
const ChevronLeft = props => {
  return (
    <StyledChevronLeft
      {...props}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6663 13.3333L5.33301 7.99996L10.6663 2.66663"
        stroke="#292929"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledChevronLeft>
  );
};

export default ChevronLeft;
