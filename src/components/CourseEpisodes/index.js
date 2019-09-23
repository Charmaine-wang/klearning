import React from "react";
import styled from "styled-components";
// import CourseEpisodesCard from "../CourseEpisodesCard";
import Button from "../Button";
import TempCourseCard from "../TempCourseCard";
import MiscInfoCard from "../MiscInfoCard";

const StyledCourseEpisodes = styled.div`
  .apply-button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 16px 0px;
  }
  .similar-header {
    margin: 16px;
    color: var(--black-font);
    font-weight: 400;
  }
  .similar-courses {
    margin: 16px;
  }
`;
const CourseEpisodes = () => {
  return (
    <StyledCourseEpisodes>
      {/* <CourseEpisodesCard /> */}
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
      <div className="apply-button">
        <Button
          btnName="Ansök"
          textColor="white"
          buttonWidth="40%"
          bgColor="var(--soft-orange)"
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
      <div className="apply-button">
        <Button
          btnName="Gå till kurser"
          textColor="white"
          buttonWidth="40%"
          bgColor="var(--soft-orange)"
        />
      </div>
    </StyledCourseEpisodes>
  );
};

export default CourseEpisodes;
