/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";
import ChevronLeft from "../Icons/ChevronLeft";

const StyledSetup = styled.div`
  display: ${props => (props.hideOverview ? "none" : "fixed")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100vw;
  height: 5vh;
  background-color: var(--card-color);
  border-top: 1px solid #bdbdbd;
  z-index: 2;
  & > div {
    display: flex;
    align-items: center;
    > a {
      font-size: 12px;
      text-decoration: none;
      color: var(--black-font);
    }
  }
`;

const Setup = (props, { className }) => {
  return (
    <StyledSetup className={className}>
      <div>
        <ChevronLeft />
        <a href="/course/overview">Översikt</a>
      </div>
      <img
        src="/images/Ikoner/setup.svg"
        alt="settings"
        onClick={props.changeMethod}
      />
      {/* <More onClick={changeMethod} /> */}
    </StyledSetup>
  );
};
export default Setup;
