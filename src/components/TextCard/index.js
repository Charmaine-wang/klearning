import React from "react";
import styled from "styled-components";

const StyledTextCard = styled.div`
  margin: 0;
  height: ${props => props.height};
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* padding: 0 15px 0 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  & > .massatext {
    height: 80vh;
    overflow-y: scroll;
    padding: 10% 0 0 3vw;
  }
  & > div:first-child > p {
    height: 400px;
    /* background-color: red; */
  }
  & .button-div {
    align-self: center;
    display: flex;
    width: 100%;
    height: 45px;
    align-items: space-between;
    padding: 0 3vw;

    justify-content: space-between;
    /* margin: 4% 0 0 0; */
  }
`;

const TextCard = ({ header, intro, paragraph }) => {
  return (
    <StyledTextCard>
      <div className="massatext">
        <h1>{header}</h1>
        <p>{intro}</p>
        <p>{paragraph}</p>

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
    </StyledTextCard>
  );
};

export default TextCard;
