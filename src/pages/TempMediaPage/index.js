import React, { useState } from "react";
import styled from "styled-components";
import AlternativeDrop from "../../components/AlternativeDrop";
import OverviewDrop from "../../components/OverviewDrop";
import VideoCard from "../../components/VideoCard";
import SoundCard from "../../components/SoundCard";
import TextCard from "../../components/TextCard";

const StyledMediaPage = styled.div`
  margin-top: 65px;
  width: 100%;
  height: 100%;
  overflow-x: none;

  position: relative;
`;

const MediaPage = ({ nextPart, header, intro, paragraph }) => {
  const [isChanged, setChanged] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState("");
  // console.log(showVideo);
  // const [selectedAlt, setSelectedAlt] = useState(false);

  // console.log(showVideo);
  return (
    <StyledMediaPage>
      <OverviewDrop changeMethod={() => setChanged(!isChanged)} />
      <AlternativeDrop
        hideDrop={isChanged}
        showVideo={() => {
          setSelectedAlt("video");
          setChanged(true);
        }}
        showSound={() => {
          setSelectedAlt("sound");
          setChanged(true);
        }}
        showText={() => {
          setSelectedAlt("text");
          setChanged(true);
        }}
      />
      {selectedAlt === "text" && (
        <TextCard
          nextPart={nextPart}
          header={header}
          intro={intro}
          paragraph={paragraph}
        />
      )}
      {selectedAlt === "video" && (
        <VideoCard nextPart={nextPart} header={header} intro={intro} />
      )}
      {selectedAlt === "sound" && (
        <SoundCard nextPart={nextPart} header={header} intro={intro} />
      )}
    </StyledMediaPage>
  );
};

export default MediaPage;
