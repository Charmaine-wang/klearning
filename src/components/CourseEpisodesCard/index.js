import React from "react";
import styled from "styled-components";
import CourseLesson from "../CourseLesson";

const StyledCourseEpisodesCard = styled.div`
  background-color: white;
  border-radius: 10px;
  margin: 16px;
  padding: 16px;
`;

const CourseEpisodesCard = () => {
  return (
    <StyledCourseEpisodesCard>
      <CourseLesson
        image="images/watch.png"
        lessonNumber="1"
        lessonName="Introduktion"
        lessonLength="03:53"
      />
      <CourseLesson
        image="images/read.png"
        lessonNumber="2"
        lessonName="Nästa steg"
        lessonLength="05:55"
      />
      <CourseLesson
        image="images/write.png"
        lessonNumber="3"
        lessonName="Nästa steg"
        lessonLength="05:55"
      />
      <CourseLesson
        image="images/read.png"
        lessonNumber="4"
        lessonName="Nästa steg"
        lessonLength="05:55"
      />
      <CourseLesson
        image="images/star.png"
        lessonNumber="5"
        lessonName="Nästa steg"
        lessonLength="05:55"
        displayLine="none"
      />
    </StyledCourseEpisodesCard>
  );
};

export default CourseEpisodesCard;
