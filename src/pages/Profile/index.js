import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileHead from '../../components/ProfileHead';
import CV from '../../components/CV';
import MyCourses from '../../components/MyCourses';
import MyCertificates from '../../components/MyCertificates';
import FixedContainer from '../../components/FixedContainer';
import Button from '../../components/Button';
import Container from '../../components/Container';
import ContainerSlider from '../../components/ContainerSlider';
import ActiveCourseCard from '../../components/ActiveCourseCard';

const StyledProfile = styled.div`
  margin-top: 74px;

  .buttonSwitch {
    width: 90vw;
    margin: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const Profile = () => {
  const [profileComponent, setProfileComponent] = useState('certificates');

  function switchComponent() {
    if (profileComponent === 'certificates') {
      return <MyCertificates />;
    }
    if (profileComponent === 'cv') {
      return <CV />;
    }
    if (profileComponent === 'courses') {
      return <MyCourses />;
    }
    return null;
  }

  return (
    <StyledProfile>
      <ProfileHead />
      <div className="buttonSwitch">
        <Button
          btnName="Intyg"
          onClick={() => setProfileComponent('certificates')}
        />
        <Button btnName="CV" onClick={() => setProfileComponent('cv')} />
        <Button
          btnName="Kurser"
          onClick={() => setProfileComponent('courses')}
        />
      </div>
      {switchComponent()}
      <Container>
        <h1>Rekommenderade kurser</h1>
      </Container>
      <Container padding="0 0 16px 16px">
        <FixedContainer>
          <ContainerSlider>
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
          </ContainerSlider>
        </FixedContainer>
      </Container>
    </StyledProfile>
  );
};

export default Profile;
