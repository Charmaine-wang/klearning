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

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15% 0;
  width: 100vw;

  height: ${props => (props.expandHeight ? "auto" : "100%")};

  .btnDiv {
    display: flex;
    width: 90vw;
    /* height: 10vh; */
    align-items: center;
    justify-content: space-between;
    /* margin: 0 10% 0 0; */
  }

  & > div:first-child {
    position: relative;
    height: 400px;
    top: 0;
    background-image: url("images/home.png");
    & > .overlayer {
      height: 100%;
      width: 100%;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 13.29%,
        rgba(0, 0, 0, 0.8) 100%
      );
      position: absolute;
    }

    & > h1,
    p {
      position: absolute;
      color: #ffffff;
      z-index: 2;
      text-align: center;
    }
    & > h1 {
      top: 40%;
      font-size: 40px;
    }
    & > p {
      top: 70%;
    }
  }
`;

const Home = props => {
  return (
    <StyledHome expandHeight>
      <div>
        <div className="overlayer"></div>

        <h1>Vi låter kulturen utvecklas.</h1>
        <p>
          Vi kynter ihop branshen och förser profisionella kulturarbetare med
          spetskompetens.
        </p>
      </div>

      <GridLayout marginGrid="0 4%">
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
      </GridLayout>
    </StyledHome>
  );
};

export default Home;
