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

  .intro-hand-in > p {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    // font-weight: bold;
    padding: 16px;
  }

  .intro-header-paragraph {
    font-weight: bold;
  }

  .intro-hand-in > div {
    display: flex;
    justify-content: center;
    align-items: center;
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
      <div className="intro-hand-in">
        <div>
          <img src={introImage} alt="" />
        </div>
        <p className="intro-header-paragraph">{introHeaderParagraph}</p>
        <p>{introParagraph1}</p>
        <p>{introParagraph2}</p>
        <p>{introParagraph3}</p>
      </div>
    </StyledHandInCard>
  );
};

export default HandInCard;
