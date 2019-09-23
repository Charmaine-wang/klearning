import React from "react";
import styled from "styled-components";
import FixedContainer from "../FixedContainer";
import Container from "../Container";
import ContainerSlider from "../ContainerSlider";
import ActiveCourseCard from "../ActiveCourseCard";

const StyledMyCourses = styled.div`
  h1 {
    padding: 16px 0;
  }
`;

const MyCourses = () => {
  return (
    <StyledMyCourses>
      <Container>
        <h1>Pågående kurser</h1>
        <FixedContainer>
          <ContainerSlider>
            <ActiveCourseCard
              activeCourseImg="images/Bild.png"
              courseCat="Scenekonst"
              courseTime="4h"
              cardHeader="Self-tape International med Thosmas Chaanhing"
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Thosmas Chaanhing"
              bookmark="images/bookmark.png"
            />
          </ContainerSlider>
        </FixedContainer>
      </Container>
    </StyledMyCourses>
  );
};

export default MyCourses;
