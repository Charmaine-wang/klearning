import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import CourseChoicesCard from "../CourseChoicesCard";
// import MiscInfoCard from "../MiscInfoCard";
import Button from "../Button";

import TempCourseCard from "../TempCourseCard";

const StyledAboutCourse = styled.div`
  .information-header {
    margin-left: 16px;

    color: var(--black-font);
  }
  .recommended-course-header {
    margin: 16px;
    color: var(--black-font);
  }
  .recommended-course {
    margin: 16px;
  }

  .similar-header {
    margin: 16px;
    // margin-top: 16px;
    color: var(--black-font);
  }
  .similar-courses {
    margin: 16px;
  }
  .button-div {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;

const AboutCourse = () => {
  return (
    <StyledAboutCourse>
      <CourseChoicesCard lessonAmount="8" handInAmount="3" hoursAmount="4" />
      <CourseInformationCard
        header="Om denna kurs"
        paragraph="Målet med kursen är att du ska lära dig hur du gör din egen self-tape på bästa sätt. Syftet är att 
        ge bättre förutsättningar för skådespelare att nå ut till en större och internationell marknad. I kursen får du 
        verktygen för att på ett bra sätt komma igång med att producera self-tapes. Thomas Chaanhing delar med sig av sin 
        erfarenhet och metoder och kommer bland annat gå igenom några av sina egna self-tapes, vad fungerar och vad fungerar
         inte samt en generell set-up utifrån den teknik och redskap du har tillgång till.
        Poängen är att du ska lära dig att göra ett bra self-tape, oavsett vilken utrustning du har tillgång till."
      />
      <CourseInformationCard
        header="Utrustning"
        paragraph="En digital kamera eller mobilkamera.
        En dator, smartphone eller tablet."
      />
      <CourseInformationCard
        header="Målgrupp"
        paragraph="Professionella skådespelare."
      />
      <CourseInformationCard
        header="Förkunskaper"
        paragraph="Att du uppfyller våra antagningskriterier."
        linkText="Läs mer"
        linkHref="https://www.kulturakademin.com/viktigt-att-veta-om-vara-aktiviteter"
      />
      {/* <h1 className="information-header">Kursinformation</h1> */}
      {/* <MiscInfoCard
        seatsAmouts="20"
        startDate="25 maj"
        endDate="1 juni"
        applyDate="24 april, 2020"
        participator="Juanita Alexander, Soham Alexander, Evan Webb"
        activity="Danslektioner, tutorials"
        language="Engelska"
        moreInfo="Till ansökan ska CV bifogas samt en motivering till 
                varför just du vill gå. Motiveringen kan vara avgörande vid uttagningen.
                Urvalet sker veckan efter sista ansökningsdag. Anmälan är bindande, 
                det är viktigt att du kan delta i de erbjudna aktiviteterna. Frånvaroavgift
                på 500 kr/workshop debiteras om du uteblir utan att avanmäla dig senast 24 timmar
                innan aktiviteten startar."
      /> */}
      <div className="button-div">
        <Button
          bgColor="var(--soft-orange)"
          textColor="white"
          btnName="Ansök till kurs"
          border="none"
        />
      </div>

      <h1 className="similar-header">Liknande Material</h1>
      <div className="similar-courses">
        <TempCourseCard
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
        />
        <TempCourseCard
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
        />
        <TempCourseCard
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
        />
      </div>
    </StyledAboutCourse>
  );
};

export default AboutCourse;
