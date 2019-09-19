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
    </StyledMyCertificates>
  );
};

export default MyCertificates;
