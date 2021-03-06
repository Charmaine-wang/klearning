import React from "react";
import styled from "styled-components";

const StyledQuizButton = styled.button`
  width: ${props => (props.buttonWidth ? props.buttonWidth : "auto")};
  height: ${props => (props.buttonHeight ? props.buttonHeight : "auto")};
  background-color: ${props =>
    props.color ? props.color : "var(--card-color)"};
  border: ${props =>
    props.border ? props.border : "1px solid var(--light-grey)"};
  color: ${props => (props.textColor ? props.textColor : "var(--black-font)")};
  padding: ${props => (props.padding ? props.padding : "10px 22px")};
  text-align: center;
  text-decoration: none;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "400")};
  border-radius: 8px;
  margin: ${props => (props.margin ? props.margin : "0")};

  &:hover {
    color: var(--soft-orange);
    border: solid 1px var(--soft-orange);
  }
  &:active {
    color: var(--soft-orange);
    border: solid 1px var(--soft-orange);
  }

  &.correct {
    color: white;
    background-color: var(--teal);
  }
  &.inCorrect {
    color: white;
    background-color: var(--red);
  }
`;
const QuizButton = ({ btnName, isCorrect, ...props }) => {
  // eslint-disable-next-line no-undef
  return (
    <StyledQuizButton
      className={
        isCorrect !== null ? (isCorrect ? "correct" : "inCorrect") : ""
      }
      {...props}
    >
      {btnName}
    </StyledQuizButton>
  );
};

export default QuizButton;
