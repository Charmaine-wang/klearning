import React, { useState } from "react";
import styled from "styled-components";
import Intro from "../../components/Quiz/Intro";
import Question from "../../components/Quiz/Question";
import ImageQuestion from "../../components/Quiz/ImageQuestion";
import Achievement from "../../components/Quiz/Achievement";
import Container from "../../components/Container";

const StyledQuizPage = styled.div`
  margin-top: 64px;
  width: 100%;
`;

const QuizPage = () => {
  const [lessonPart, setLessonPart] = useState(2);
  const [progress, setProgress] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  function nextLessonPart() {
    setLessonPart(lessonPart + 1);
    setProgress(progress + 10);
  }

  function updateQuizScore() {
    setQuizScore(quizScore + 1);
  }

  function repeatQuiz() {
    setLessonPart(2);
    setQuizScore(0);
  }

  return (
    <StyledQuizPage>
      <Container>
        {lessonPart === 2 ? (
          <Intro numberOfQuestions="3" nextPart={nextLessonPart} />
        ) : (
          ""
        )}
        {lessonPart === 3 ? (
          <Question
            question="Vilken vinkel är mest fördelaktig att använda sig av när man ställer upp sin kamera?"
            questionNumber="1"
            answerOptions={[
              "Ögonhöjd",
              "Snett ovanifrån",
              "Snett underifrån",
              "Lite från sidan"
            ]}
            correctAnswer="Ögonhöjd"
            nextPart={nextLessonPart}
            updateScore={updateQuizScore}
          />
        ) : (
          ""
        )}
        {lessonPart === 4 ? (
          <ImageQuestion
            image="images/quiz2.jpg"
            headerQuestion="VAD ÄR DET PÅ BILDEN?"
            question="Vad kallas det här?"
            questionNumber="2"
            answerOptions={["Tripod", "Micstativ", "Kamerahus"]}
            correctAnswer="Tripod"
            nextPart={nextLessonPart}
            updateScore={updateQuizScore}
          />
        ) : (
          ""
        )}
        {lessonPart === 5 ? (
          <ImageQuestion
            image="images/quiz3.jpg"
            headerQuestion="SANT ELLER FALSKT"
            question="Det är viktigt att den huvudsakliga ljussättningen kommer bakifrån kameran."
            questionNumber="3"
            answerOptions={["Sant", "Falskt"]}
            buttonPadding="8px 10px"
            correctAnswer="Sant"
            nextPart={nextLessonPart}
            updateScore={updateQuizScore}
          />
        ) : (
          ""
        )}
        {lessonPart === 6 ? (
          <Achievement
            buttonPadding="10px 15px"
            message="Bra jobbat!"
            nextPart={nextLessonPart}
            score={quizScore}
            numberOfQuestions="3"
            repeatQuiz={repeatQuiz}
          />
        ) : (
          ""
        )}
      </Container>
    </StyledQuizPage>
  );
};

export default QuizPage;
