import React, { useState } from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import CV from "../../components/CV";
import MyCourses from "../../components/MyCourses";
import MyCertificates from "../../components/MyCertificates";
import FixedContainer from "../../components/FixedContainer";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ContainerSlider from "../../components/ContainerSlider";
import ActiveCourseCard from "../../components/ActiveCourseCard";

const StyledProfile = styled.div`
  margin-top: 64px;
  width: 100%;

  .buttonSwitch {
    width: 90vw;
    margin: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    @media only screen and (min-width: 700px) {
      width: 700px;
    }
  }
`;

const Profile = () => {
  const [profileComponent, setProfileComponent] = useState("certificates");

  function switchComponent() {
    if (profileComponent === "certificates") {
      return <MyCertificates />;
    }
    if (profileComponent === "cv") {
      return <CV />;
    }
    if (profileComponent === "courses") {
      return <MyCourses />;
    }
    return null;
  }

  return (
    <StyledProfile>
      <Container>
        <ProfileHead />
      </Container>
      <div className="buttonSwitch">
        <Button
          btnName="Kurser"
          onClick={() => setProfileComponent("courses")}
        />
        <Button
          btnName="Intyg"
          onClick={() => setProfileComponent("certificates")}
        />
        <Button btnName="CV" onClick={() => setProfileComponent("cv")} />
      </div>
      <Container>{switchComponent()}</Container>
      <Container padding="0">
        <h1>Sparade kurser</h1>
      </Container>
      <Container padding="16px 0" width="100%">
        <FixedContainer>
          <ContainerSlider>
            <ActiveCourseCard
              activeCourseImg="/images/Bild.png"
              courseCat="Dans"
              courseTime="4h"
              cardHeader="Dans Workshop med Connie Robertson "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="/images/bookmark.png"
              padding="0 0 0 3vw"
            />

            <ActiveCourseCard
              activeCourseImg="/images/Bild.png"
              courseCat="Film"
              courseTime="4h"
              cardHeader="Film Workshop med Connie Robertson  "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="/images/bookmark.png"
            />
            <ActiveCourseCard
              activeCourseImg="/images/Bild.png"
              courseCat="Foto"
              courseTime="4h"
              cardHeader="Foto Workshop med Connie Robertson "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="/images/bookmark.png"
            />
            <ActiveCourseCard
              activeCourseImg="/images/Bild.png"
              courseCat="Studio Ljus"
              courseTime="4h"
              cardHeader="Ljussättnings Workshop med Connie Robertson "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="/images/bookmark.png"
              padding="0 3vw 0 0"
            />
          </ContainerSlider>
        </FixedContainer>
      </Container>
    </StyledProfile>
  );
};

export default Profile;
