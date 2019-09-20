import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInChoice = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .choice-hand-in > h2{
    color:black;
    margin-bottom:12px;

  }
  .choice-hand-in > p{
    line-height: 1.4rem;
  }
  .choice-header{
    color:black;
    font-weight:500;
    margin-top:16px;
  }
  .button-choices-container{
    display:flex;
    flex-direction:column;
  }
  .choice-button{
    margin 4px 0px;
  }

`;

const HandInChoice = ({ header, paragraph, choiceHeader }) => {
  return (
    <StyledHandInChoice>
      <div className="choice-hand-in">
        <h2>{header}</h2>
        <p>{paragraph}</p>
        <p className="choice-header">{choiceHeader}</p>
        <div className="button-choices-container">
          <Button
            className="choice-button"
            textAlign="left"
            textColor="black"
            btnName="Scen 1"
          />
          <Button
            className="choice-button"
            textAlign="left"
            textColor="black"
            btnName="Scen 2"
          />
          <Button
            className="choice-button"
            textAlign="left"
            textColor="black"
            btnName="Scen 3"
          />
        </div>
      </div>
    </StyledHandInChoice>
  );
};

export default HandInChoice;
