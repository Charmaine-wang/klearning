import React from 'react';
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";


const StyledAboutCourse = styled.div`

`;

const AboutCourse = (props) =>{

    return(
        <>
        <CourseInformationCard
         header="Om denna kurs"
         paragraph="Dolor ut amet culpa voluptate culpa cillum velit reprehenderit
            deserunt officia dolore. Non adipisicing amet consectetur occaecat.
            Sit esse ad nostrud esse veniam officia consequat proident proident qui.
            Et cillum aute commodo do minim aliqua quis aute nulla exercitation aliqua.">
        </CourseInformationCard>
        <CourseInformationCard
        header="Målgrupp"
        paragraph="Professionella utövare inom kulturella och kreativa näringar* verksamma i 
            Västra Götaland. Vi ser med fördel att det är en bredd av kreatörer och konstnärliga
            utövare, dels för att stimulera mötet men också det gemensamma lärandet. * Scenkonst,
            musik, design, arkitektur,
            mode, konst, konsthantverk, foto, film, kommunikation/reklam, måltid, kulturarv, spel.">
       </CourseInformationCard>
       <CourseInformationCard
        header="Förkunskaper"
        paragraph="Professionella utövare inom kulturella och kreativa näringar* verksamma i 
            Västra Götaland. Vi ser med fördel att det är en bredd av kreatörer och konstnärliga
            utövare, dels för att stimulera mötet men också det gemensamma lärandet. * Scenkonst,
            musik, design, arkitektur,
            mode, konst, konsthantverk, foto, film, kommunikation/reklam, måltid, kulturarv, spel.">
       </CourseInformationCard>
       </>
    )
 }

 export default AboutCourse;