/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
// import PlayVideo from "../Icons/PlayVideo";

const StyledTaskItem = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  align-items: center;
  pointer-events: auto;
  /* color: var(--light-grey); */
  justify-content: space-between;
  border-top: 1px solid #6d6d6d;
  & > div {
    display: flex;
    width: 60%;
    & > h2 {
      text-align: left;
    }
    & > :first-child {
      margin: 0 7px 0 0;
    }
  }
  h3 {
    font-weight: 600;
  }
  & > h3 {
    color: var(--soft-orange);
  }

  &:hover {
    color: ${props =>
      props.hoverColor ? props.hoverColor : "var(--soft-orange)"};
    text-decoration: underline;
  }
  &:active {
    color: ${props =>
      props.activeColor ? props.activeColor : "var(--soft-orange)"};
    text-decoration: underline;
  }
`;

const TaskItem = props => {
  return (
    <StyledTaskItem {...props}>
      {/* <PlayVideo /> */}
      <img src={props.icon} alt="icon" />
      <div>
        <h3>{props.taskNr}</h3>
        <h3>{props.taskName}</h3>
      </div>
      <aside />
      <h3>{props.taskTime}</h3>
    </StyledTaskItem>
  );
};

export default TaskItem;
