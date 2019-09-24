/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import TaskItem from "../TaskItem";

const StyledTask = styled.div`
  width: 95vw;
  height: 100%;
  border-radius: 10px;
  padding: 8% 5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  & > h1 {
    margin: 0 0 10% 0;
  }

  & > hr {
    width: 100%;
    opacity: 0.2;
    border-top: 1px solid #6d6d6d;
    /* transform: rotate(90deg); */
  }
`;

const Task = (props, { onClick }) => {
  console.log(onClick);
  return (
    <StyledTask>
      <h1>{props.courseData.headerTask}</h1>

      {props.courseData.course.map(item => {
        return (
          <TaskItem
            taskName={item.taskName}
            taskNr={item.taskNr}
            taskTime={item.taskTime}
            onClick={() => console.log("hej")}
          />
        );
      })}
    </StyledTask>
  );
};

export default Task;
