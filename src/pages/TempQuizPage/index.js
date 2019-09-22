import React from "react";
import styled from "styled-components";
import Intro from "../../components/Quiz/Intro";
import Question from "../../components/Quiz/Question";
import ImageQuestion from "../../components/Quiz/ImageQuestion";
import QuizButton from "../../components/Quiz/QuizButton";
import Achievement from "../../components/Quiz/Achievement";
import Container from "../../components/Container";

const StyledQuizPage = styled.div`
  margin-top: 74px;
`;

const QuizPage = () => {
  return (
    <StyledQuizPage>
      <Container>
        <h1>This is the quizpage</h1>
        <Intro />
        <Question
          question="Vilken vinkel är mest fördelaktig att använda sig av när man ställer upp sin kamera?"
          questionNumber="1"
          answerOptions={[
            "Ögonhöjd",
            "Snett ovanifrån",
            "Snett underifrån",
            "Lite från sidan"
          ]}
        />
        <ImageQuestion
          headerQuestion="VAD ÄR DET PÅ BILDEN?"
          question="Vad kallas det här?"
          questionNumber="2"
          answerOptions={["Tripod", "Micstativ", "Kamerahus"]}
        />
        <ImageQuestion
          headerQuestion="SANT ELLER FALSKT"
          question="Det är viktigt att den huvudsakliga ljussättningen kommer bakifrån kameran."
          questionNumber="3"
          answerOptions={["Sant", "Falskt"]}
          buttonPadding="8px 10px"
        />
        <QuizButton
          btnName="Svarsalternativ"
          buttonWidth="100%"
          fontWeight="600"
          margin="0 0 20px 0"
        />
        <Achievement buttonPadding="10px 15px" />
      </Container>
    </StyledQuizPage>
  );
};

export default QuizPage;
