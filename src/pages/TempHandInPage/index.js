import React from "react";
import styled from "styled-components";
import HandIn from "../../components/handin/HandIn";

const StyledHandInPage = styled.div`
  margin-top: 74px;
`;

const HandInPage = () => {
  return (
    <StyledHandInPage>
      <HandIn />
      <h1>This is tha page where we test HandIn-views/components.</h1>
    </StyledHandInPage>
  );
};

export default HandInPage;
