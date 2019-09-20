import React from "react";
import styled from "styled-components";

const StyledIntro = styled.div`
  background-color: var(--card-color);
`;

const Intro = () => {
  return (
    <StyledIntro>
      <h3>Quiz</h3>
      <p>
        Dags för ett quiz för att se om du fick med dig informationen från den
        senaste lektionen! Quizet består av flervalsfrågor. Markera det svar du
        tror är rätt och klicka på “nästa fråga” för att ta dig vidare.
      </p>
      <h5>Antal frågor: 3 Beräknad tid: ca 2 min</h5>
    </StyledIntro>
  );
};

export default Intro;
