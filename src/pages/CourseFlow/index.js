/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import styled from "styled-components";
import Container from "../../components/Container";
import Intro from "../../components/Quiz/Intro";
import Question from "../../components/Quiz/Question";
import ImageQuestion from "../../components/Quiz/ImageQuestion";
import Achievement from "../../components/Quiz/Achievement";
import Media from "../TempMediaPage";
import HandInIntro from "../../components/handin/HandInIntroCard";
import HandInChoice from "../../components/handin/HandInChoice";
import HandInPoints from "../../components/handin/HandInPoints";
import HandInExercise from "../../components/handin/HanInExercise";
import HandInUpload from "../../components/handin/HandInUpload";
import HandInFeedBack from "../../components/handin/HandInFeedBack";
import HandInFeedBackConfirm from "../../components/handin/HandInFeedBackConfirm";
import Evaluation from "../../components/handin/Evaluation";
import OverviewDrop from "../../components/OverviewDrop";
import Setup from "../../components/Setup";
import Media2 from "../../components/Mediatwo";

const StyledCourseFlow = styled.div`
  margin-top: 59px;
  width: 100%;
`;

const CourseFlow = props => {
  const [lessonPart, setLessonPart] = useState(1);
  const [progress, setProgress] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [mediaState, setMediaState] = useState(
    props.location && props.location.state && props.location.state.mediaPreset
      ? props.location.state.mediaPreset
      : "video"
  );

  const nextLessonPart = () => {
    setLessonPart(lessonPart + 1);
    setProgress(progress + 10);
  };

  function previousLessonPart() {
    setLessonPart(lessonPart - 1);
    setProgress(progress - 10);
  }

  function updateQuizScore() {
    setQuizScore(quizScore + 1);
  }

  function repeatQuiz() {
    setLessonPart(2);
    setQuizScore(0);
  }
  const [isChanged, setChanged] = useState(true);

  return (
    <StyledCourseFlow>
      {lessonPart !== 1 && <OverviewDrop />}

      {lessonPart === 1 ? (
        <>
          <Setup changeMethod={() => setChanged(!isChanged)} />

          {mediaState === "video" && (
            <Container>
              <Media
                nextPart={nextLessonPart}
                previousPart={previousLessonPart}
                video
                setChanged={setChanged}
                isChanged={isChanged}
              />
            </Container>
          )}
          {mediaState === "sound" && (
            <Container>
              <Media
                nextPart={nextLessonPart}
                previousPart={previousLessonPart}
                sound
                setChanged={setChanged}
                isChanged={isChanged}
              />
            </Container>
          )}
          {mediaState === "text" && (
            <Media
              nextPart={nextLessonPart}
              previousPart={previousLessonPart}
              text
              setChanged={setChanged}
              isChanged={isChanged}
            />
          )}
        </>
      ) : (
        ""
      )}

      {lessonPart === 2 ? <Media2 /> : ""}

      <Container>
        {lessonPart === 3 ? (
          <Intro
            numberOfQuestions="3"
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 4 ? (
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
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 5 ? (
          <ImageQuestion
            image="/images/quiz2.jpg"
            headerQuestion="VAD ÄR DET PÅ BILDEN?"
            question="Vad kallas det här?"
            questionNumber="2"
            answerOptions={["Tripod", "Micstativ", "Kamerahus"]}
            correctAnswer="Tripod"
            nextPart={nextLessonPart}
            updateScore={updateQuizScore}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 6 ? (
          <ImageQuestion
            image="/images/quiz3.jpg"
            headerQuestion="SANT ELLER FALSKT"
            question="Det är viktigt att den huvudsakliga ljussättningen kommer bakifrån kameran."
            questionNumber="3"
            answerOptions={["Sant", "Falskt"]}
            buttonPadding="8px 10px"
            correctAnswer="Sant"
            nextPart={nextLessonPart}
            updateScore={updateQuizScore}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 7 ? (
          <Achievement
            buttonPadding="10px 15px"
            message="Bra jobbat!"
            nextPart={nextLessonPart}
            score={quizScore}
            numberOfQuestions="3"
            repeatQuiz={repeatQuiz}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 8 ? (
          <HandInIntro
            introImage="/images/illustrations/self-tape.svg"
            introHeaderParagraph="Skapa ett self-tape"
            introParagraph1="Nu är det dags att spela in ditt eget self-tape!"
            introParagraph2="Du laddar sedan upp din inspelning och får personlig feedback från din lärare."
            introParagraph3="Du måste själv boka tid för feedback, instruktioner för detta följer."
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 9 ? (
          <HandInChoice
            header="Skapa ett self-tape"
            paragraph="Välj en utav de tre scenerna från vårt arkiv här nedan. Öva in den så att du sedan kan spela in dig själv med hjälp av de tips du lärt dig. 
           Normalt sätt får du fyra dagar på dig att öva in en scen."
            choiceHeader="Välj scen:"
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 10 ? (
          <HandInPoints
            header="Att tänka på"
            paragraph="Förbered ditt self-tape genom att följa listan nedanför."
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 11 ? (
          <HandInExercise
            header="Inspelning"
            paragraph="Filma din self-tape själv eller ta hjälp av en vän. "
            paragraph2="När du är klar med filmningen, klipp ihop din Self-Tape, gratisprogram som Davinci resolve finns för alla att använda."
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 12 ? (
          <HandInUpload
            header="Lämna in inspelning"
            paragraph="GUIDE om hur du överför, laddar upp filerna till kursen så att kursledare sedan kan ge feedback."
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 13 ? (
          <HandInFeedBack
            header="Boka tid för feedback"
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 14 ? (
          <HandInFeedBackConfirm
            header="Nu har du bokat en tid!"
            paragraph="Feedback sker via Skype. Klicka på knappen nedan för att komma till mötet."
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 15 ? (
          <Evaluation
            header="Bra jobbat!"
            paragraph="Vi tackar för ditt engagemang hos oss. Vi vill hjälpa till att göra våra kurser
         så bra som möjligt för våra deltagare. För att kunna göra det behöver vi dina erfarenheter 
         och åsikter. "
            imgSrc="/images/illustrations/rewards.svg"
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
      </Container>
    </StyledCourseFlow>
  );
};

export default CourseFlow;
