import React from "react";
import styled from "styled-components";
import Button from "../../Button";
// import HandInModal from "../HandInModal";
// import ToggleContent from "../ToggleContent";

const StyledHandInChoice = styled.div`
  width: 100%;
  margin: auto;

  min-height: 80vh;
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 10px;
  }
  .basic-styling {
    box-shadow: var(--shadow);
    position: relative;
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;

    .choice-hand-in > h2 {
      font-size: 20px;
      color: var(--black-font);
      margin-bottom: 12px;
    }
    .choice-hand-in > p {
      line-height: 1.7em;
    }
    .choice-header {
      color: var(--black-font);
      font-weight: 500;
      margin-top: 16px;
    }
    .button-choices-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .choice-button {
        width: 100%;
        margin: 4px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--soft-orange);
      }
    }
  }
  .grow {
    flex-grow: 1;
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HandInChoice = ({
  header,
  paragraph,
  choiceHeader,
  nextPart,
  previousPart
}) => {
  return (
    <StyledHandInChoice>
      <h1>Inlämning</h1>
      <div className="basic-styling">
        <div className="choice-hand-in">
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <p className="choice-header">{choiceHeader}</p>
          <div className="button-choices-container">
            <Button
              className="choice-button"
              textAlign="left"
              textColor="var(--black-font)"
              btnName="Utdrag från Fröken Julie"
            />
            <Button
              className="choice-button"
              textAlign="left"
              textColor="var(--black-font)"
              btnName="Utdrag från Pulp Fiction"
            />
            <Button
              className="choice-button"
              textAlign="left"
              textColor="var(--black-font)"
              btnName="Utdrag från Sound of music"
            />
          </div>
        </div>
      </div>
      <div className="grow" />
      <div className="row">
        <Button
          btnName="Bakåt"
          buttonWidth="150px"
          onClick={() => previousPart()}
        />
        <Button
          btnName="Nästa"
          buttonWidth="150px"
          textColor="var(--soft-orange)"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInChoice>
  );
};

export default HandInChoice;
