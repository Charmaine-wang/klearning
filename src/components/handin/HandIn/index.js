import React from "react";
import styled from "styled-components";
import HandInCard from "../HandInCard";

const StyledHandIn = styled.div``;

const HandIn = () => {
  return (
    <StyledHandIn>
      <HandInCard
        introImage="images/selfTape.png"
        introHeaderParagraph="Skapa ett self-tape"
      />
    </StyledHandIn>
  );
};

export default HandIn;
