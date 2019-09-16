import React from 'react'
import styled from 'styled-components'
import ActiveCourseCard from '../ActiveCourseCard';


const StyledContainerSlide= styled.div `
display: flex;
position: relative;
width: auto;


`

const ContainerSlider = () => {
    return (
      <StyledContainerSlide>
          <ActiveCourseCard
            activeCourseImg="images/Bild.png"
            courseCat="Dans"
            courseTime="4h"
            cardHeader="Dans Workshop med Connie Roberson "
            cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
            courseTeacher="Connie Robertson"
            bookmark="images/bookmark.png"
          />

          <ActiveCourseCard
            activeCourseImg="images/Bild.png"
            courseCat="Dans"
            courseTime="4h"
            cardHeader="Dans Workshop med Connie Roberson "
            cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
            courseTeacher="Connie Robertson"
            bookmark="images/bookmark.png"
          />
          <ActiveCourseCard
            activeCourseImg="images/Bild.png"
            courseCat="Dans"
            courseTime="4h"
            cardHeader="Dans Workshop med Connie Roberson "
            cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
            courseTeacher="Connie Robertson"
            bookmark="images/bookmark.png"
          />
          <ActiveCourseCard
            activeCourseImg="images/Bild.png"
            courseCat="Dans"
            courseTime="4h"
            cardHeader="Dans Workshop med Connie Roberson "
            cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
            courseTeacher="Connie Robertson"
            bookmark="images/bookmark.png"
          />
        
      </StyledContainerSlide>
    );
}

export default ContainerSlider
