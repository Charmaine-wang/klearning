import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import CourseChoicesCard from "../CourseChoicesCard";
import MiscInfoCard from "../MiscInfoCard";
import Button from "../Button";

import TempCourseCard from "../TempCourseCard";

const StyledAboutCourse = styled.div`
  .information-header {
    margin-left: 16px;

    color: black;
  }
  .recommended-course-header {
    margin: 16px;
    color: black;
  }
  .recommended-course {
    margin: 16px;
  }

  .similar-header {
    margin: 16px;
    // margin-top: 16px;
    color: black;
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
        paragraph="Dolor ut amet culpa voluptate culpa cillum velit reprehenderit
                deserunt officia dolore. Non adipisicing amet consectetur occaecat.
                Sit esse ad nostrud esse veniam officia consequat proident proident qui.
                Et cillum aute commodo do minim aliqua quis aute nulla exercitation aliqua."
      />
      <CourseInformationCard
        header="Målgrupp"
        paragraph="Professionella utövare inom kulturella och kreativa näringar* verksamma i 
                Västra Götaland. Vi ser med fördel att det är en bredd av kreatörer och konstnärliga
                utövare, dels för att stimulera mötet men också det gemensamma lärandet. * Scenkonst,
                musik, design, arkitektur,
                mode, konst, konsthantverk, foto, film, kommunikation/reklam, måltid, kulturarv, spel."
      />
      <CourseInformationCard
        header="Förkunskaper"
        paragraph="Professionella utövare inom kulturella och kreativa näringar* verksamma i 
                    Västra Götaland. Vi ser med fördel att det är en bredd av kreatörer och konstnärliga
                    utövare, dels för att stimulera mötet men också det gemensamma lärandet. * Scenkonst,
                    musik, design, arkitektur,

                    mode, konst, konsthantverk, foto, film, kommunikation/reklam, måltid, kulturarv, spel."
      />
      {/* <h1 className="recommended-course-header">Rekommenderad Kurs</h1>
      <div className="recommended-course">
        <TempCourseCard
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
        />
      </div> */}
      <h1 className="information-header">Kursinformation</h1>
      <MiscInfoCard
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
