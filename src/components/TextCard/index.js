import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledTextCard = styled.div`
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
      <div className="button-div">
        <Button btnName="Till översikten" buttonWidth="160px" />
        <Button btnName="Nästa Lektion" buttonWidth="160px" />
      </div>
    </StyledTextCard>
  );
};

export default TextCard;
