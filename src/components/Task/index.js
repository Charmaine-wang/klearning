import React from "react";
import styled from "styled-components";
import PlayVideo from "../Icons/PlayVideo";

const StyledTask = styled.div`
  width: 95vw;
  height: 100%;
  padding: 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  & > .task-step {
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      & > :first-child {
        margin: 0 7px 0 0;
      }
    }
  }
  & > hr {
    width: 100%;
    opacity: 0.2;
    border-top: 1px solid #6d6d6d;
    /* transform: rotate(90deg); */
  }
`;

const Task = ({ headerTask, taskNr, taskName, taskTime }) => {
  return (
    <StyledTask>
      <h1>{headerTask}</h1>
      <hr />
      <div className="task-step">
        <PlayVideo />
        <div>
          <h2>{taskNr}</h2>
          <h2>{taskName}</h2>
        </div>
        <aside />
        <h3>{taskTime}</h3>
      </div>
      <hr />
    </StyledTask>
  );
};

export default Task;
