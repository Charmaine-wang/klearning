import React from "react";
import styled from "styled-components";
import More from "../Icons/More";
import ChevronLeft from "../Icons/ChevronLeft";

const StyledOverviewDrop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
  width: 100vw;
  height: 5vh;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  z-index: 2;

  & > div {
    display: flex;
    align-items: center;
  }
`;

const OverviewDrop = ({ changeMethod }) => {
  return (
    <StyledOverviewDrop>
      <div>
        <ChevronLeft />
        <h5>Översikt</h5>
      </div>
      <More onClick={changeMethod} />
    </StyledOverviewDrop>
  );
};
export default OverviewDrop;
