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

const StyledCourseFlow = styled.div`
  margin-top: 64px;
  width: 100%;
`;

const CourseFlow = () => {
  const [lessonPart, setLessonPart] = useState(9);
  const [progress, setProgress] = useState(0);
  const [quizScore, setQuizScore] = useState(0);

  function nextLessonPart() {
    setLessonPart(lessonPart + 1);
    setProgress(progress + 10);
  }

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
  return (
    <StyledCourseFlow>
      <Container>
        {lessonPart === 1 ? (
          <Media
            nextPart={nextLessonPart}
            header="1. Introduktion"
            intro="Välkommen till kursen “Self-tape - international”.  I denna kurs kommer du att få lära dig användbara tekniker och tips som
            ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes.
            
            Den här introduktionen kommer ge dig en översikt om vad kursen kommer innehålla, hur tjänsten fungerar och viktiga datum att hålla reda på. "
            paragraph="Här står en längre text till text-sidan."
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}

        {lessonPart === 2 ? (
          <Intro
            numberOfQuestions="3"
            nextPart={nextLessonPart}
            previousPart={previousLessonPart}
          />
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
            previousPart={previousLessonPart}
          />
        ) : (
          ""
        )}
        {lessonPart === 4 ? (
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
        {lessonPart === 5 ? (
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
        {lessonPart === 6 ? (
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
        {lessonPart === 7 ? (
          <Media
            nextPart={nextLessonPart}
            header="2. Vad är en self-tape?"
            intro="I den här lektionen får vi kunskap om vad ett self-tape är och hur det används i film branchen. "
            paragraph="Self taping – den provfilmning som skådespelaren gör med sig själv framför kameran - blir allt vanligare inom rollsättning/casting. Den förekommer som ett första steg i processen då skådespelare och rollsättare inte kan träffas personligen t. ex när utländska casting directors söker svenska skådespelare.

            För många känns det som en utmaning att stå för såväl gestaltning som den tekniska utformningen av en self tape. I workshopen går Tommy Chaanhing igenom de nödvändiga grundelementen i filmarbetet och ger skådespelaren insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes. Workshopen blandar föreläsningar och praktiska filmövningar. Genom Tommys återkoppling kring övningarna och diskussioner i gruppen får deltagarna kunskap och kompetens att skapa self tapes som når fram, gör intryck och håller så god kvalité som möjligt."
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
