import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInCard = styled.div`
  width: 100%;
  margin: auto;

  min-height: 80vh;
  display: flex;
  flex-direction: column;

  .grow {
    flex-grow: 1;
    background-color: var(--bg-color);
    box-shadow: none;
  }

  h1 {
    margin-bottom: 10px;
  }
  & > div {
    box-shadow: var(--shadow);
    /* margin: 16px; */
    /* padding: 16px; */
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    /* div:first-of-type {
    background-color: white;
    border-radius: 10px;
  } */

    .intro-hand-in > p {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      // font-weight: bold;
      padding: 16px;
      line-height: 1.7em;
    }

    .intro-header-paragraph {
      font-weight: bold;
    }

    .intro-hand-in > div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 350px;
        height: 350px;
        object-fit: cover;
      }
    }
  }
`;

const HandInCard = ({
  introImage,
  introHeaderParagraph,
  introParagraph1,
  introParagraph2,
  introParagraph3,
  nextPart
}) => {
  return (
    <StyledHandInCard>
      <h1>Inlämning</h1>
      <div>
        <div className="intro-hand-in">
          <div>
            <img src={introImage} alt="illustration" />
          </div>
          <p className="intro-header-paragraph">{introHeaderParagraph}</p>
          <p>{introParagraph1}</p>
          <p>{introParagraph2}</p>
          <p>{introParagraph3}</p>
        </div>
      </div>
      <div className="grow" />
      <div className="button-div">
        <Button
          btnName="Starta uppgift"
          buttonWidth="100%"
          bgColor="var(--soft-orange)"
          textColor="var(--card-color)"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInCard>
  );
};

export default HandInCard;
