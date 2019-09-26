/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import TaskItem from "../TaskItem";

const StyledTask = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 5% 5% 0 5%;
  background-color: var(--card-color);
  display: flex;
  flex-direction: column;

  & > h1 {
    margin: 0 0 6% 0;
    font-size: 20px;
    font-weight: 600;
  }

  & > hr {
    width: 100%;
    opacity: 0.2;
    border-top: 1px solid var(--dark-grey);
    /* transform: rotate(90deg); */
  }
`;

const Task = props => {
  return (
    <StyledTask>
      <h1>{props.courseData.headerTask}</h1>

      {props.courseData.course.map(item => {
        return (
          <TaskItem
            className={props.className}
            onClick={props.onClick}
            taskName={item.taskName}
            taskNr={item.taskNr}
            taskTime={item.taskTime}
            icon={item.icon}
            key={item.taskNr}
          />
        );
      })}
    </StyledTask>
  );
};

export default Task;
