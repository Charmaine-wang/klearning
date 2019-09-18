import React from "react";
import styled from "styled-components";
// import SearchField from "../../components/SearchField";
import FixedContainer from "../../components/FixedContainer";
import GridLayout from "../../components/GridLayout";
import CourseList from "../../components/CourseList";
import ContainerSlider from "../../components/ContainerSlider";
import ActiveCourseCard from "../../components/ActiveCourseCard";
import AllCourses from "../../components/AllCourses";
import Button from "../../components/Button";

import ELearning from '../../components/ELearning'
import Computer from '../../components/Icons/Computer'
import People from "../../components/Icons/People";
import CertificateIcon from "../../components/Icons/CertificateIcon";
import ImgText from '../../components/ImgText'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15% 0 0 0;
  width: 100vw;
  height: 100%;
  
  .btnDiv{

    display: flex;
    width: 90vw;
    /* height: 10vh; */
    align-items: center;
    justify-content: space-between;
    /* margin: 0 10% 0 0; */
  }


`;

const Home = props => {
// const [isClicked, setClicked] = useState(false);


  return (
    <StyledHome expandHeight>

      <ImgText imgTextPic="images/home.png" imgTextHeader="Vi låter kulturen utvecklas." imgTextParagraph='Vi kynter ihop branshen och förser profisionella kulturarbetare med
          spetskompetens.'/>

      <GridLayout 
      // marginGrid="0 0 0 -4%"
       padding="0 0 0 4%">
        <FixedContainer heightContainer="10vh">
          <ContainerSlider>
            <AllCourses />
          </ContainerSlider>
        </FixedContainer>

        <h1>Mina ktiva Kurser</h1>
        <CourseList courseWidth />
        <h1>Aktiva biblotek</h1>

        <FixedContainer heightContainer="45vh">
          <ContainerSlider>
            <ActiveCourseCard
              activeCourseImg="images/Bild.png"
              courseCat="Dans"
              courseTime="4h"
              cardHeader="Dans Workshop med Connie Roberson "
              cardParagraph="Consequat officia pariatur consectetur culpa ad laborum magna est irure nulla. Ipsum enim minim amet minim."
              courseTeacher="Connie Robertson"
              // bookmark="images/bookmark.png"
              // setClicked={() => setClicked(!isClicked)}
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

        <h1>Kursbiblotek</h1>
        <div className="btnDiv">
          <Button btnName="Kurser" buttonHeight="50%" buttonWidth="145px" />
          <Button btnName="Kplay" buttonHeight="50%" buttonWidth="145px" />
        </div>

        <FixedContainer heightContainer="13vh">
          <ContainerSlider>
            <CourseList courseWidth />
            <CourseList courseWidth />
            <CourseList courseWidth />
          </ContainerSlider>
        </FixedContainer>

        <FixedContainer heightContainer="13vh">
          <ContainerSlider>
            <CourseList courseWidth />
            <CourseList courseWidth />
            <CourseList courseWidth />
          </ContainerSlider>
        </FixedContainer>

        <FixedContainer heightContainer="13vh">
          <ContainerSlider>
            <CourseList courseWidth />
            <CourseList courseWidth />
            <CourseList courseWidth />
          </ContainerSlider>
        </FixedContainer>

        <GridLayout
          gridRadius="10px"
          gridGap="3em"
          widthGrid="96%"
          bgColor="#ffffff"
          colLayout="1fr"
          rowLayout="1fr 1fr 1fr"
          padding="0 0 15% 0"
        >
          <ELearning iconElearning={<Computer />} />
          <ELearning iconElearning={<People />} />
          <ELearning iconElearning={<CertificateIcon />} />
        </GridLayout>

      </GridLayout>
        <ImgText imgTextPic="images/workshop.png" imgTextHeader="Vill du hålla en workshop?" imgTextParagraph='Kontakta oss gärna om du vill hjälpa branshcen kulturarbetare att uttvecklas.'/>

    </StyledHome>
  );
};

export default Home;
