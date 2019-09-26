/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import PlayVideo from "../Icons/PlayVideo";

const StyledTaskItem = styled.div`
  display: flex;
  width: 100%;
  height: 7vh;
  align-items: center;
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
`;

const TaskItem = props => {
  return (
    <StyledTaskItem {...props}>
      <PlayVideo />
      <div>
        <h2>{props.taskNr}</h2>
        <h2>{props.taskName}</h2>
      </div>
      <aside />
      <h3>{props.taskTime}</h3>
    </StyledTaskItem>
  );
};

export default TaskItem;
