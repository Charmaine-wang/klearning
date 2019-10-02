import React from "react";
import styled from "styled-components";
// import SearchField from "../../components/SearchField";
import FixedContainer from "../../components/FixedContainer";
import GridLayout from "../../components/GridLayout";
import CourseListItem from "../../components/CourseListItem";
import ContainerSlider from "../../components/ContainerSlider";
import ActiveCourseCard from "../../components/ActiveCourseCard";
import AllCourses from "../../components/AllCourses";
import Button from "../../components/Button";

import ELearning from "../../components/ELearning";
import ImgText from "../../components/ImgText";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15% 0 0 0;
  width: 100vw;
  height: 100%;

  .btnDiv {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    margin: 0;
    /* align-items: center; */
    .btnDiv {
      justify-content: flex-start;
      & > aside {
        width: 20px;
      }
    }
  }
`;

const Home = () => {
  // const [isClicked, setClicked] = useState(false);

  return (
    <StyledHome expandHeight>
      <ImgText
        imgTextPic="/images/Photos/frontcover.jpg"
        imgTextHeader="Vi låter kulturen utvecklas."
        imgTextParagraph="Vi knyter ihop branschen och förser professionella kulturarbetare med spetskompetens."
      />

      <GridLayout
        padding="0 0 0 3vw"
        displayDesk="grid"
        // direction="column"
        paddingDesk="0 14.1%"
        gapDesk="30px 0"
      >
        <FixedContainer
          heightContainer="10vh"
          justifyDesk="center"
          margin="0 0 0 -4%"
          padding="0 0 0 4%"
        >
          <ContainerSlider paddingScroll="0 18% 0 0">
            <AllCourses />
          </ContainerSlider>
        </FixedContainer>

        <h1>Mina Aktiva Kurser</h1>
        <CourseListItem
          courseImg="/images/Photos/action.jpg"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
          courseTimeLeft="2min"
        />
        <h1>Aktiva bibliotek</h1>

        <FixedContainer heightContainer="40vh">
          <ContainerSlider paddingScroll="0 19% 0 0">
            <ActiveCourseCard
              activeCourseImg="/images/Photos/Self-tape-cover.jpg"
              courseCat="Scenkonst"
              courseTime="4h"
              cardHeader="Self-tape International"
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Tommy Chaanhing"
              // bookmark="images/bookmark.png"
              // setClicked={() => setClicked(!isClicked)}
            />

            <ActiveCourseCard
              activeCourseImg="/images/Photos/action.jpg"
              courseCat="Film"
              courseTime="4h"
              cardHeader="Film Workshop med Connie Roberson "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="images/bookmark.png"
              activeCourseAlt="course cover"
            />
            <ActiveCourseCard
              activeCourseImg="/images/Photos/camera.jpg"
              courseCat="Foto"
              courseTime="4h"
              cardHeader="Foto Workshop med Connie Roberson "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="images/bookmark.png"
              activeCourseAlt="course cover"
            />
            <ActiveCourseCard
              activeCourseImg="/images/Photos/light.jpg"
              courseCat="Studio ljus"
              courseTime="4h"
              cardHeader="Ljussättnings Workshop med Connie Roberson"
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              bookmark="/images/bookmark.png"
              activeCourseAlt="course cover"
            />
          </ContainerSlider>
        </FixedContainer>

        <h1>Kursbibliotek</h1>
        <div className="btnDiv">
          <Button btnName="Kurser" buttonHeight="50%" buttonWidth="145px" />
          <aside />
          <Button btnName="Kplay" buttonHeight="50%" buttonWidth="145px" />
        </div>

        <FixedContainer
          heightContainer="44vh"
          margin="0 0 0 -4%"
          padding="0 0 0 4%"
          paddingFixed="0"
        >
          <ContainerSlider
            height="100%"
            marginBetween="4% 0 0 0"
            paddingScroll="0 14% 0 0"
          >
            <div>
              <CourseListItem
                courseImg="/images/Photos/Self-tape-cover.jpg"
                courseLength="4h"
                courseTitle="Röstteknik, ljudboksinläsning..."
                courseTimeLeft="3min"
                courseTeacher="Jan Cruseman"
                courseAlt="course cover"
              />
              <CourseListItem
                courseImg="/images/Photos/camera.jpg"
                courseLength="4h"
                courseTitle="Kurs i filmskådespeleri"
                courseTimeLeft="3min"
                courseTeacher="Lisa Ohlin"
                courseAlt="course cover"
              />
              <CourseListItem
                courseImg="/images/Photos/dance.jpg"
                courseLength="4h"
                courseTitle="Shifting focus"
                courseTimeLeft="3min"
                courseTeacher="Rene Baker"
                courseAlt="course cover"
              />
            </div>
            <div>
              <CourseListItem
                courseImg="/images/Photos/filming.jpg"
                courseLength="4h"
                courseTitle="Storytelling och klipp tekniker..."
                courseTimeLeft="3min"
                courseTeacher="Connie Robertson"
                courseAlt="course cover"
              />
              <CourseListItem
                courseImg="/images/Photos/light.jpg"
                courseLength="4h"
                courseTitle="Koreografi för operan..."
                courseTimeLeft="3min"
                courseTeacher="Robert Lane"
                courseAlt="course cover"
              />
              <CourseListItem
                courseImg="/images/Photos/Self-tape-cover.jpg"
                courseLength="4h"
                courseTitle="Kom igång med ditt filmskapande..."
                courseTimeLeft="3min"
                courseTeacher="Connie Robertson"
                courseAlt="course cover"
              />
            </div>
            <div>
              <CourseListItem
                courseImg="images/Photos/action.jpg"
                courseLength="4h"
                courseTitle="Kom igång med ditt filmskapande..."
                courseTimeLeft="3min"
                courseTeacher="Connie Robertson"
                courseAlt="course cover"
              />
              <CourseListItem
                courseImg="/images/Photos/window.jpg"
                courseLength="4h"
                courseTitle="Kom igång med ditt filmskapande..."
                courseTimeLeft="3min"
                courseTeacher="Connie Robertson"
                courseAlt="course cover"
              />
              <CourseListItem
                courseImg="/images/Photos/pencil.jpg"
                courseLength="4h"
                courseTitle="Kom igång med ditt filmskapande..."
                courseTimeLeft="3min"
                courseTeacher="Connie Robertson"
                courseAlt="course cover"
              />
            </div>
          </ContainerSlider>
        </FixedContainer>
        {/* FOR MOBILE */}
        <h1>Varför e-learning?</h1>
        <GridLayout
          gridRadius="10px"
          gridGap="3em"
          widthGrid="97.4%"
          bgColor="var(--card-color)"
          colLayout="1fr"
          rowLayout="1fr 1fr 1fr"
          padding="0 3vw 14% 0"
          rowLayoutDesk="1fr"
          colLayoutDesk="1fr 1fr 1fr"
          widthDesk="80%"
          shadow="var(--shadow)"
        >
          <ELearning
            iconElearning="/images/Illustrations/Learning.svg"
            title="Praktiskt inlärning"
            text="Genomför projekt och uppdrag som du kan nyttja i arbetslivet."
          />
          <ELearning
            iconElearning="/images/Illustrations/communication.svg"
            title="Utvecklas tillsammans"
            text="Jobba med andra kursdeltagare och lär dela kunskap tillsammans."
          />
          <ELearning
            iconElearning="/images/Illustrations/rewards.svg"
            title="Belönas med intyg"
            text="Jobba med andra kursdeltagare och lär dela kunskap tillsammans."
          />
        </GridLayout>
        {/* FOR DESKTOP */}
        {/* <GridLayout paddingDesk="0 22% 0 0">
          <ELearningDesktop />
        </GridLayout> */}
      </GridLayout>
      <ImgText
        imgMargin="10% 0 0 0"
        imgTextPic="/images/Photos/photoshoot.jpg"
        imgTextHeader="Vill du hålla en workshop?"
        imgTextParagraph="Kontakta oss gärna om du vill hjälpa branshcen kulturarbetare att uttvecklas."
      />
    </StyledHome>
  );
};

export default Home;
