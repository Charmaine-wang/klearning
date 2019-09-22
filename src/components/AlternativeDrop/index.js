/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import styled from "styled-components";
import PlayVideo from "../Icons/PlayVideo";
import TextIcon from "../Icons/TextIcon";
import Sound from "../Icons/Sound";

const StyledAlternativeDrop = styled.div`
  display: flex;
  width: 95vw;
  height: 30vh;
  padding: 5%;
  position: absolute;
  top: ${props => (props.hideDrop ? "-252px" : "43px")};
  transition: top 0.5s ease-in-out;
  z-index: 1;
  left: 2.5%;

  flex-direction: column;
  border-radius: 10px;
  background: #ffffff;
  justify-content: space-around;
  align-items: center;
  animation: fade-in 0.2s ease-in-out;
  & > :first-child {
    align-self: flex-start;
  }
  & > div {
    width: 100%;
    height: 18%;
    border-radius: 10px;
    border: 1px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    & > aside {
      width: 5%;
    }
  }
`;
const AlternativeDrop = props => {
  // const [selectedAlt, setSelectedAlt] = useState(false);

  return (
    <StyledAlternativeDrop {...props}>
      <h2>Välj metod:</h2>
      <div onClick={() => console.log("video")}>
        <PlayVideo />
        <aside />
        <h3>Video</h3>
      </div>
      <div onClick={() => console.log("sound")}>
        <Sound />
        <aside />
        <h3>Ljud</h3>
      </div>
      <div onClick={() => console.log("text")}>
        <TextIcon />
        <aside />
        <h3>Text</h3>
      </div>
    </StyledAlternativeDrop>
  );
};

export default AlternativeDrop;
