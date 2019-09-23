import React from "react";
import styled from "styled-components";
import PlayVideo from "../Icons/PlayVideo";
import TextIcon from "../Icons/TextIcon";
import Sound from "../Icons/Sound";
import Button from "../Button";

const StyledModalAlternative = styled.div`
  display: ${props => (props.isActive ? "flex" : "none")};
  width: 90vw;
  height: 30vh;
  position: absolute;
  flex-direction: column;
  border-radius: 10px;
  background: var(--card-color);
  justify-content: space-around;
  align-items: center;
  animation: fade-in 0.2s ease-in-out;
  & > h2 {
    font-size: 20px;
  }
  & > .icon-div {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  & > .button-div {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
const ModalAlternative = props => {
  return (
    <StyledModalAlternative {...props}>
      <h2>Hur vill du ta del av kursen?</h2>
      <div className="icon-div">
        <PlayVideo /> <Sound /> <TextIcon />{" "}
      </div>
      <div className="button-div">
        <Button btnName="Avbryt" buttonWidth="135px" />{" "}
        <Button btnName="Fortsätt" buttonWidth="135px" />{" "}
      </div>
    </StyledModalAlternative>
  );
};

export default ModalAlternative;
