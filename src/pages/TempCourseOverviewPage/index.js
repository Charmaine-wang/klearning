import React from "react";
import styled from "styled-components";
import Communication from "../../components/Communication";

const StyledOwerviewPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: center;
  margin-top: 74px;
`;

const OwerviewPage = () => {
  return (
    <StyledOwerviewPage>
      {/* <ModalAlternative isActive /> */}
      <Communication />
    </StyledOwerviewPage>
  );
};

export default OwerviewPage;
