import React from "react";
import styled from "styled-components";
import Button from "../Button";
import MiscInfoCard from "../MiscInfoCard";
import CourseListItem from "../CourseListItem";

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
  .course-div {
    margin: 16px 0px;
  }
`;
const CourseEpisodes = () => {
  return (
    <StyledCourseEpisodes>
      <MiscInfoCard
        teacher="Tommy Chaanhing"
        seatsAmouts="20"
        startDate="Från: 25 maj, 2020"
        endDate="Till: 5 juni, 2020"
        applyDate="24 april, 2020"
        activity="Self-tape, framförande och inspelning"
        language="Svenska"
        cost="Kursen är gratis. 
        En frånvaroavgift på 500 kr debiteras om du uteblir utan att avanmäla 
        dig senast 24 timmar innan aktiviteten startar."
        selection="Till ansökan ska CV bifogas samt en motivering till varför 
        just du vill gå. Motiveringen kan vara avgörande vid uttagningen.
        Urvalet sker veckan efter sista ansökningsdag. Anmälan är bindande,
        det är viktigt att du kan delta i de erbjudna aktiviteterna. "
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
        <div className="course-div">
          <CourseListItem
            courseImg="/images/rectangle2.jpg"
            courseLength="4h"
            courseTitle="Röstteknik, ljudboksinläsning..."
            courseTeacher="Jan Cruseman"
          />
        </div>
        <div className="course-div">
          <CourseListItem
            courseImg="/images/Photos/light.jpg"
            courseLength="5h"
            courseTitle="Kurs i filmskådespeleri"
            courseTeacher="Lisa Ohlin"
          />
        </div>
        <div className="course-div">
          <CourseListItem
            courseImg="/images/Photos/filming.jpg"
            courseLength="4h"
            courseTitle="Shifting focus"
            courseTeacher="Rene Baker"
          />
        </div>
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
