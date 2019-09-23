import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledTextCard = styled.div`
  margin: 10px 0;
  height: ${props => props.height};
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px 0 0;
  & > div:first-child > p {
    height: 400px;
    /* background-color: red; */
  }
  & > div .button-div {
    display: flex;
    width: 100%;
    height: 45px;
    justify-content: space-around;
    margin: 4% 0 0 0;
  }
`;

const TextCard = () => {
  return (
    <StyledTextCard>
      <div className="massatext">
        <h1>1. Introduktion</h1>
        <p>
          Välkommen till kursen “Self-tape - international”. I denna kurs kommer
          du att få lära dig användbara tekniker och tips som ger dig insikter
          om vad rollsättare och regissörer tittar på och letar efter i self
          tapes.
        </p>
        <p>
          Välkommen till kursen “Self-tape - international”. I denna kurs kommer
          du att få lära dig användbara tekniker och tips som ger dig insikter
          om vad rollsättare och regissörer tittar på och letar efter i self
          tapes.
        </p>

        <p>
          Välkommen till kursen “Self-tape - international”. I denna kurs kommer
          du att få lära dig användbara tekniker och tips som ger dig insikter
          om vad rollsättare och regissörer tittar på och letar efter i self
          tapes.
        </p>
        <p>
          Välkommen till kursen “Self-tape - international”. I denna kurs kommer
          du att få lära dig användbara tekniker och tips som ger dig insikter
          om vad rollsättare och regissörer tittar på och letar efter i self
          tapes.
        </p>
        <p>
          Välkommen till kursen “Self-tape - international”. I denna kurs kommer
          du att få lära dig användbara tekniker och tips som ger dig insikter
          om vad rollsättare och regissörer tittar på och letar efter i self
          tapes.
        </p>
      </div>
      <div className="button-div">
        <Button btnName="Till översikten" buttonWidth="160px" />
        <Button btnName="Nästa Lektion" buttonWidth="160px" />
      </div>
    </StyledTextCard>
  );
};

export default TextCard;
