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
        courseImg="/images/Photos/overlay.jpg"
        courseLength="4h"
        courseTitle="Röstteknik, ljudboksinläsning..."
        courseCreator="Jan Cruseman"
      />
      <Certificate
        courseImg="/images/Photos/overlay.jpg"
        courseLength="4h"
        courseTitle="Kurs i filmskådespeleri"
        courseCreator="Lisa Ohlin"
      />
      <Certificate
        courseImg="/images/Photos/overlay.jpg"
        courseLength="4h"
        courseTitle="Shifting focus"
        courseCreator="Rene Baker"
      />
    </StyledMyCertificates>
  );
};

export default MyCertificates;
