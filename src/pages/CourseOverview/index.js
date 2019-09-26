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

const OwerviewPage = props => {
  const courseOverview = [
    {
      headerTask: "Introduktion",
      course: [
        {
          taskNr: "1.",
          taskName: "Introduktionsfilm",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Video.svg",
          onClick: ""
        }
      ]
    },
    {
      headerTask: "Bakgrund",
      course: [
        {
          taskNr: "2.",
          taskName: "Vad är ett self-tape",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Video.svg"
        },
        {
          taskNr: "3.",
          taskName: "Övning",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Quiz.svg"
        }
      ]
    },
    {
      headerTask: "Inlämning",
      course: [
        {
          taskNr: "1.",
          taskName: "Skapa ett self-tape",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Uppgift.svg"
        },
        {
          taskNr: "2.",
          taskName: "Att tänka på",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Uppgift.svg"
        },
        {
          taskNr: "3.",
          taskName: "Inspeling",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Uppgift.svg"
        },
        {
          taskNr: "4.",
          taskName: "Lämna in inspelning",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Ladda-up.svg"
        },
        {
          taskNr: "5.",
          taskName: "Boka tid för feedback",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Feedback.svg"
        }
      ]
    },
    {
      headerTask: "Intyg",
      course: [
        {
          taskNr: "6.",
          taskName: "Utvädering",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Utvärdering.svg"
        },
        {
          taskNr: "7.",
          taskName: "Intyg",
          taskTime: "03.53",
          icon: "/images/Ikoner/Kursöversikt/Intyg.svg"
        }
      ]
    }
  ];

  const [isTakingCourse, setTakingCourse] = useState(false);
  console.log(props);
  return (
    <StyledOwerviewPage>
      <ModalAlternative isActive={isTakingCourse} />
      <ImgButton
        imgBtn="/images/Photos/Self-tape-cover.jpg"
        btnName="Starta kurs"
        buttonWidth="160px"
        buttonHeight="buttonHeight"
        onClick={() => setTakingCourse(!isTakingCourse)}
      />
      {/* <ModalAlternative isActive /> */}
      <Container padding="30px 0 30px 0">
        <Communication />
      </Container>
      <Container padding="0 0 10px 0">
        <h1>Kursöversikt</h1>
      </Container>
      {courseOverview.map(courses => {
        return (
          <Container padding="0 0 20px 0" key={courses.headerTask}>
            <Task
              courseData={courses}
              onClick={() => setTakingCourse(!isTakingCourse)}
              key={courses.taskNr}
            />
          </Container>
        );
      })}
      <Container padding="0 0 20px 0">
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
