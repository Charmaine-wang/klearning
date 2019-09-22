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
      <GridLayout padding="0 0 0 2.5%">
        {/* <ModalAlternative isActive /> */}
        <Communication />
        <AlternativeDrop />
        <Task
          headerTask="Introduktion"
          taskNr="1."
          taskName="Dansa med korvar"
          taskTime="03.53"
        />

        <Button
          btnName="Starta kurs"
          bgColor="#C97C36"
          buttonWidth="135px"
          textColor="#ffffff"
        />
      </GridLayout>
    </StyledOwerviewPage>
  );
};

export default OwerviewPage;
