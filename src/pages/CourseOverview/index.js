import React, { useState } from "react";
import styled from "styled-components";
import Communication from "../../components/Communication";
import Task from "../../components/Task";
import Button from "../../components/Button";
import ImgButton from "../../components/ImgButton";

import ModalAlternative from "../../components/ModalAlternative";
import Container from "../../components/Container";

const StyledOwerviewPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  margin: auto;
  justify-content: center;
  margin-top: 74px;
  @media screen and (min-width: 600px) {
    width: 700px;
  }

  & > div > .start-course-btn {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
  }
`;

const OwerviewPage = () => {
  const courseOverview = [
    {
      headerTask: "introduktion",
      course: [
        { taskNr: "1.", taskName: "Introduktionsfilm", taskTime: "03.53" }
      ]
    },
    {
      headerTask: "Bakgrund",
      course: [
        { taskNr: "2.", taskName: "Vad är ett self-tape", taskTime: "03.53" },
        { taskNr: "3.", taskName: "Övning", taskTime: "03.53" }
      ]
    },
    {
      headerTask: "Inlämning",
      course: [
        { taskNr: "1.", taskName: "Skapa ett self-tape", taskTime: "03.53" },
        { taskNr: "2.", taskName: "Att tänka på", taskTime: "03.53" },
        { taskNr: "3.", taskName: "Inspeling", taskTime: "03.53" },
        { taskNr: "4.", taskName: "Lämna in inspelning", taskTime: "03.53" },
        { taskNr: "5.", taskName: "Boka tid för feedback", taskTime: "03.53" }
      ]
    },
    {
      headerTask: "Intyg",
      course: [
        { taskNr: "6.", taskName: "Utvädering", taskTime: "03.53" },
        { taskNr: "7.", taskName: "Intyg", taskTime: "03.53" }
      ]
    }
  ];

  const [isTakingCourse, setTakingCourse] = useState(false);

  return (
    <StyledOwerviewPage>
      <ModalAlternative isActive={isTakingCourse} />
      <Container>
        <ImgButton
          imgBtn="/images/Photos/Self-tape-cover.jpg"
          btnName="Starta kurs"
          buttonWidth="160px"
          buttonHeight="buttonHeight"
          onClick={() => setTakingCourse(!isTakingCourse)}
        />
      </Container>
      {/* <ModalAlternative isActive /> */}
      <Container>
        <Communication />
      </Container>

      {courseOverview.map(courses => {
        return (
          <Container>
            <Task
              courseData={courses}
              onClick={() => setTakingCourse(!isTakingCourse)}
            />
          </Container>
        );
      })}
      <Container>
        <div className="start-course-btn">
          <Button
            btnName="Starta kurs"
            bgColor="var(--soft-orange)"
            buttonWidth="135px"
            textColor="var(--card-color)"
            onClick={() => setTakingCourse(!isTakingCourse)}
          />
        </div>
      </Container>
    </StyledOwerviewPage>
  );
};

export default OwerviewPage;
