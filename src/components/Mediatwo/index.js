/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlternativeDrop from "../AlternativeDrop";
// import Setup from "../../components/Setup";
import VideoCard from "../VideoCard";
import SoundCard from "../SoundCard";
import TextCard from "../TextCard";
import Button from "../Button";

const StyledMediatwo = styled.div`
  /* margin-top: 65px; */
  width: 100%;
  height: 100%;
  overflow-x: none;
  margin: 0;
  padding: 0 -16px;
  @media only screen and (min-width: 700px) {
    width: 700px;
    margin: auto;
  }
  & > div:last-child {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;

const Mediatwo = (props, { previousPart }) => {
  // const [isChanged, setChanged] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState("");
  // const [selectedAlt, setSelectedAlt] = useState(false);
  useEffect(() => {
    if (props.sound) {
      setSelectedAlt("sound");
    }

    if (props.text) {
      setSelectedAlt("text");
    }

    if (props.video) {
      setSelectedAlt("video");
    }
  }, []);

  return (
    <StyledMediatwo>
      {/* <Setup changeMethod={() => setChanged(!isChanged)} /> */}
      <AlternativeDrop
        hideDrop={props.isChanged}
        showVideo={() => {
          setSelectedAlt("video");
          props.setChanged(true);
        }}
        showSound={() => {
          setSelectedAlt("sound");
          props.setChanged(true);
        }}
        showText={() => {
          setSelectedAlt("text");
          props.setChanged(true);
        }}
      />
      {selectedAlt === "text" && (
        <TextCard
          nextPart={props.nextPart}
          pdf="Ladda ner som pdf"
          pageCurrent="1"
          pageAmount="3"
          header="Vad är en Self-tape?"
          paragraph2="Self taping – den provfilmning som skådespelaren gör med sig själv framför kameran - blir allt vanligare inom rollsättning/casting. Den förekommer som ett första steg i processen då skådespelare och rollsättare inte kan träffas personligen t. ex när utländska casting directors söker svenska skådespelare.

          För många känns det som en utmaning att stå för såväl gestaltning som den tekniska utformningen av en self tape. I workshopen går Tommy Chaanhing igenom de nödvändiga grundelementen i filmarbetet och ger skådespelaren insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes. Workshopen blandar föreläsningar och praktiska filmövningar. Genom Tommys återkoppling kring övningarna och diskussioner i gruppen får deltagarna kunskap och kompetens att skapa self tapes som når fram, gör intryck och håller så god kvalité som möjligt."
          intro="I den här lektionen får vi kunskap om vad ett self-tape är och hur det används i film branchen. "
          previousPart={previousPart}
        />
      )}
      {selectedAlt === "video" && (
        <VideoCard
          nextPart={props.nextPart}
          header="2. Vad är en self-tape?"
          intro='Välkommen till kursen "Self-tape - international".  I denna kurs kommer du att få lära dig användbara tekniker och tips som ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes.'
          previousPart={previousPart}
        />
      )}
      {selectedAlt === "sound" && (
        <SoundCard
          nextPart={props.nextPart}
          header="2. Vad är en self-tape?"
          intro='Välkommen till kursen "Self-tape - international".  I denna kurs kommer du att få lära dig användbara tekniker och tips som ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes.'
          previousPart={previousPart}
        />
      )}

      <div className="button-div">
        <Button
          btnName="Till översikten"
          buttonWidth="160px"
          onClick={() => props.previousPart()}
        />
        <Button
          btnName="Nästa Lektion"
          buttonWidth="160px"
          bgColor="var(--soft-orange)"
          textColor="var(--card-color)"
          onClick={() => props.nextPart()}
        />
      </div>
    </StyledMediatwo>
  );
};

export default Mediatwo;
