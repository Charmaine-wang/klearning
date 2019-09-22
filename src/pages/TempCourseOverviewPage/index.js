import React from "react";
import styled from "styled-components";
import Communication from "../../components/Communication";
import Task from "../../components/Task";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";

const StyledOwerviewPage = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  justify-content: center;
  margin-top: 74px;
  & > div > .start-course-btn {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }
`;

const OwerviewPage = () => {
  return (
    <StyledOwerviewPage>
      <GridLayout padding="0 0 0 2.5%">
        {/* <ModalAlternative isActive /> */}
        <Communication />
        <Task
          headerTask="Introduktion"
          taskNr="1."
          taskName="Dansa med korvar"
          taskTime="03.53"
        />

        <div className="start-course-btn">
          <Button
            btnName="Starta kurs"
            bgColor="#C97C36"
            buttonWidth="135px"
            textColor="#ffffff"
          />
        </div>
      </GridLayout>
    </StyledOwerviewPage>
  );
};

export default OwerviewPage;
