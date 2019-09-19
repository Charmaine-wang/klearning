import React from "react";
import styled from "styled-components";
import Certificate from "../Certificate";

const StyledMyCertificates = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyCertificates = () => {
  return (
    <StyledMyCertificates>
      <Certificate
        courseImg="images/rectangle2.png"
        courseLength="4h"
        courseTitle="Röstteknik, ljudboksinläsning..."
        courseCreator="Jan Cruseman"
      />
      <Certificate
        courseImg="images/rectangle2.png"
        courseLength="4h"
        courseTitle="Kurs i filmskådespeleri"
        courseCreator="Lisa Ohlin"
      />
      <Certificate
        courseImg="images/rectangle2.png"
        courseLength="4h"
        courseTitle="Kom igång med ditt filmskapande 1"
        courseCreator="Connie Robertsson"
      />
    </StyledMyCertificates>
  );
};

export default MyCertificates;
