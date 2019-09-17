import React from 'react';
import styled from 'styled-components';
import CourseLesson from '../CourseLesson';

const StyledCourseEpisodesCard = styled.div`
    background-color:white;
    border-radius: 10px;
    margin: 16px;
    padding: 16px;
`

const CourseEpisodesCard = (props) => {
    return(
        <StyledCourseEpisodesCard>
            <CourseLesson
            lessonNumber="1"
            lessonName="Introduktion"
            lessonLength="03:53"
            />
            <CourseLesson
            lessonNumber="2"
            lessonName="Nästa steg"
            lessonLength="05:55"
            />
             <CourseLesson
            lessonNumber="3"
            lessonName="Nästa steg"
            lessonLength="05:55"
            />
             <CourseLesson
            lessonNumber="4"
            lessonName="Nästa steg"
            lessonLength="05:55"
            />
             <CourseLesson
            lessonNumber="5"
            lessonName="Nästa steg"
            lessonLength="05:55"
            displayLine="none"
            />
        </StyledCourseEpisodesCard>
    )
}

export default CourseEpisodesCard;