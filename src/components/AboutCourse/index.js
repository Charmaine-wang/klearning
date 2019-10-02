import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import CourseChoicesCard from "../CourseChoicesCard";
import Button from "../Button";
import CourseListItem from "../CourseListItem";

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
  .course-div {
    margin: 16px 0px;
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
        <div className="course-div">
          <CourseListItem
            courseImg="/images/Photos/voice.jpg"
            courseLength="4h"
            courseTitle="Röstteknik, ljudboksinläsning..."
            courseTeacher="Jan Cruseman"
            courseAlt="course cover"
          />
        </div>
        <div className="course-div">
          <CourseListItem
            courseImg="/images/Photos/light.jpg"
            courseLength="5h"
            courseTitle="Kurs i filmskådespeleri"
            courseTeacher="Lisa Ohlin"
            courseAlt="course cover"
          />
        </div>
        <div className="course-div">
          <CourseListItem
            courseImg="/images/Photos/filming.jpg"
            courseLength="4h"
            courseTitle="Shifting focus"
            courseTeacher="Rene Baker"
            courseAlt="course cover"
          />
        </div>
      </div>
    </StyledAboutCourse>
  );
};

export default AboutCourse;
