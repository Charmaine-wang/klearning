import React from "react";
import styled from "styled-components";

const StyledHandInCard = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .introduction-hand-in > p {
    font-weight: bold;
  }
`;

const HandInCard = ({
  introImage,
  introHeaderParagraph,
  introParagraph1,
  introParagraph2,
  introParagraph3
}) => {
  return (
    <StyledHandInCard>
      <div className="introduction-hand-in">
        <img src={introImage} alt="" />
        <p>{introHeaderParagraph}</p>
        <p>{introParagraph1}</p>
        <p>{introParagraph2}</p>
        <p>{introParagraph3}</p>
      </div>
    </StyledHandInCard>
  );
};

export default HandInCard;
