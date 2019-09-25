import React, { useState } from "react";
import styled from "styled-components";
import Communication from "../../components/Communication";
import Task from "../../components/Task";
import Button from "../../components/Button";
import GridLayout from "../../components/GridLayout";
import ImgButton from "../../components/ImgButton";

import ModalAlternative from "../../components/ModalAlternative";

const StyledOwerviewPage = styled.div`
  display: flex;
  flex-direction: column;
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
      <ImgButton
        imgBtn="/images/selftape-hero.png"
        btnName="Starta kurs"
        buttonWidth="160px"
        buttonHeight="buttonHeight"
        onClick={() => setTakingCourse(!isTakingCourse)}
      />
      <GridLayout padding="0 0 0 2.5%">
        {/* <ModalAlternative isActive /> */}
        <Communication />

        {courseOverview.map(courses => {
          return (
            <Task
              courseData={courses}
              onClick={() => setTakingCourse(!isTakingCourse)}
            />
          );
        })}
        <div className="start-course-btn">
          <Button
            btnName="Starta kurs"
            bgColor="var(--soft-orange)"
            buttonWidth="135px"
            textColor="var(--card-color)"
            onClick={() => setTakingCourse(!isTakingCourse)}
          />
        </div>
      </GridLayout>
    </StyledOwerviewPage>
  );
};

export default OwerviewPage;
