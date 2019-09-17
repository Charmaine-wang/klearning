import React from 'react';
import styled from 'styled-components';
import CourseEpisodesCard from '../CourseEpisodesCard';
import Button from '../../components/Button';
import TempCourseCard from '../../components/TempCourseCard';


const StyledCourseEpisodes = styled.div`

.apply-button{
    width:100%;
    display:flex;
    justify-content:center;
    margin: 16px 0px;
}
.similar-header{
    margin: 16px;
    color: black;
    font-weight:400;
  }
.similar-courses{
    margin: 16px;
    
  }
` 
const CourseEpisodes = () => {
    return(
        <StyledCourseEpisodes>
            <CourseEpisodesCard/>
            <div className="apply-button">
                <Button btnName="Ansök" textColor="white" buttonWidth="40%" bgColor="var(--soft-orange)"/>
            </div>

            <h1 className="similar-header">Liknande Material</h1>
            <div clasName="similar-courses">
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
                <Button btnName="Gå till kurser" textColor="white" buttonWidth="40%" bgColor="var(--soft-orange)"/>
            </div>
        </StyledCourseEpisodes>
    )
}

export default CourseEpisodes;