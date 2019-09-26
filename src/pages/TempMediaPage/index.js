/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AlternativeDrop from "../../components/AlternativeDrop";
// import Setup from "../../components/Setup";
import VideoCard from "../../components/VideoCard";
import SoundCard from "../../components/SoundCard";
import TextCard from "../../components/TextCard";
import Button from "../../components/Button";

const StyledMediaPage = styled.div`
  /* margin-top: 65px; */
  width: 100%;
  height: 100%;
  overflow-x: none;
  margin: 0;
  background-color: red;
  /* margin:0; */

  /* position: relative; */
`;

const MediaPage = (props, { header, intro, paragraph, previousPart }) => {
  // const [isChanged, setChanged] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState("video");
  // console.log(showVideo);
  // const [selectedAlt, setSelectedAlt] = useState(false);
  console.log(props);
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
  });

  return (
    <StyledMediaPage>
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
          header={header}
          intro={intro}
          paragraph={paragraph}
          previousPart={previousPart}
        />
      )}
      {selectedAlt === "video" && (
        <VideoCard
          nextPart={props.nextPart}
          header={header}
          intro={intro}
          previousPart={previousPart}
        />
      )}
      {selectedAlt === "sound" && (
        <SoundCard
          nextPart={props.nextPart}
          header={header}
          intro={intro}
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
          onClick={() => props.nextPart()}
        />
      </div>
    </StyledMediaPage>
  );
};

export default MediaPage;
