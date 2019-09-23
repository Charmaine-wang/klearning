import React from "react";
import styled from "styled-components";

const StyledIntro = styled.div`
  background-color: var(--card-color);
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  padding: 30px;
  line-height: 165%;

  & > div {
    width: 95px;
    height: 95px;
    background-color: black;
  }

  & > h5,
  h3 {
    font-weight: 600;
    line-height: 135%;
  }

  & > div,
  h3,
  p {
    margin-bottom: 15px;
  }
`;

const Intro = () => {
  return (
    <StyledIntro>
      <div />
      <h3>Quiz</h3>
      <p>
        Dags för ett quiz för att se om du fick med dig informationen från den
        senaste lektionen!
        <br /> Quizet består av flervalsfrågor. Markera det svar du tror är rätt
        och klicka på “kolla svar“ och sedan “nästa fråga” för att ta dig
        vidare.
      </p>
      <h5>
        Antal frågor: 3 <br /> Beräknad tid: ca 2 min
      </h5>
    </StyledIntro>
  );
};

export default Intro;
