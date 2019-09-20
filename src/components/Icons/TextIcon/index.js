import React from "react";
import styled from "styled-components";

const StyledTextIcon = styled.svg`
  path {
  }
`;
const TextIcon = props => {
  return (
    <StyledTextIcon
      {...props}
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.4238 5.53845H1.57471"
        stroke="#6D6D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2378 0.615356H1.57471"
        stroke="#6D6D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.2378 10.4615H1.57471"
        stroke="#6D6D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4238 15.3846H1.57471"
        stroke="#6D6D6D"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledTextIcon>
  );
};

export default TextIcon;
