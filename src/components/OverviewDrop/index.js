/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router";
import ChevronLeft from "../Icons/ChevronLeft";

const StyledOverviewDrop = styled.div`
  display: ${props => (props.hideOverview ? "none" : "fixed")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 5vh;
  background-color: var(--card-color);
  border-top: 1px solid var(--light-grey);
  z-index: 2;
  margin: 15% 0 0 0;

  & > div {
    display: flex;
    align-items: center;
    > a {
      font-size: 12px;
      text-decoration: none;
      color: var(--black-font);
    }
  }
  & > img {
    background-color: red;
    display: ${props => (props.showIcon ? "block" : "none")};
  }
`;

const OverviewDrop = ({ changeMethod, location, className, showIcon }) => {
  return (
    <StyledOverviewDrop
      className={className}
      hideOverview={["/", "/profile", "/course", "/media"].includes(
        location.pathname
      )}
    >
      <div>
        <ChevronLeft />
        <a href="/course/overview">Översikt</a>
      </div>
      <img
        src="/images/Ikoner/setup.svg"
        alt=""
        onClick={changeMethod}
        style={{ display: showIcon ? "block" : "none" }}
      />
      {/* <More onClick={changeMethod} /> */}
    </StyledOverviewDrop>
  );
};
export default withRouter(OverviewDrop);
