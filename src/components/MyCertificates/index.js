import React from "react";
import styled from "styled-components";
import Certificate from "../Certificate";
import Container from "../Container";

const StyledMyCertificates = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyCertificates = props => {
  return (
    <StyledMyCertificates>
      <Container>
        <Certificate
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
          courseCreator="Connie Robertsson"
        />
        <Certificate
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
          courseCreator="Connie Robertsson"
        />
        <Certificate
          courseImg="images/rectangle2.png"
          courseLength="4h"
          courseTitle="Kom igång med ditt filmskapande"
          courseCreator="Connie Robertsson"
        />
      </Container>
    </StyledMyCertificates>
  );
};

export default MyCertificates;
