import React from "react";
import styled from "styled-components";
import Communication from "../../components/Communication";
import Task from "../../components/Task";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";
import AlternativeDrop from "../../components/AlternativeDrop";
// import ModalAlternative from '../../components/ModalAlternative'

const StyledOwerviewPage = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  align-items: center; */
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
