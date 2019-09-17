import React from 'react';
import styled from 'styled-components';
import CourseEpisodesCard from '../CourseEpisodesCard';

const StyledCourseEpisodes = styled.div`

` 

const CourseEpisodes = () => {
    return(
        <StyledCourseEpisodes>
            <CourseEpisodesCard 
                courseAmount="8"
                courseHours="4"
                lessonNumber="1"
                lessonName="Introduktion"
                lessonLength="03:53"
                paragraph="Vad kan Connie om dans? Lär dig om vem han är och hans magiska tekniker."
            />

        </StyledCourseEpisodes>
    )
}

export default CourseEpisodes;