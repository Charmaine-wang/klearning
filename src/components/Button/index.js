import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${props => (props.buttonWidth ? props.buttonWidth : "auto")};
  height: ${props => (props.buttonHeight ? props.buttonHeight : "auto")};

  background-color: ${props => (props.bgColor ? props.bgColor : "white")};

  border: ${props => (props.border ? props.border : "1px solid #e0e0e0")};
  color: ${props => (props.textColor ? props.textColor : "var(--font-color)")};
  padding: 8px 22px;
  text-align: center;
  text-decoration: none;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  border-radius: 8px;
  margin: ${props => (props.margin ? props.margin : "0")};

  &:hover {
    color: #cd7b2a;
    text-decoration: underline;
  }
  &:active {
    color: #cd7b2a;
    text-decoration: underline;
  }
`;
const Button = ({ btnName, ...props }) => {
  // eslint-disable-next-line no-undef
  return <StyledButton {...props}>{btnName}</StyledButton>;
};

export default Button;
