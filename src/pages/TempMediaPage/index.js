import React, { useState } from "react";
import styled from "styled-components";
import AlternativeDrop from "../../components/AlternativeDrop";
import OverviewDrop from "../../components/OverviewDrop";
import VideoCard from "../../components/VideoCard";
import SoundCard from "../../components/SoundCard";

const StyledMediaPage = styled.div`
  margin-top: 65px;
  width: 100%;
  height: 100%;
  overflow-x: none;

  position: relative;
`;

const MediaPage = props => {
  const [isChanged, setChanged] = useState(true);
  // const [selectedAlt, setSelectedAlt] = useState(false);

  // console.log(showVideo);
  return (
    <StyledMediaPage {...props}>
      <OverviewDrop changeMethod={() => setChanged(!isChanged)} />
      <AlternativeDrop hideDrop={isChanged} />
      <VideoCard />
      <SoundCard hideSound />
    </StyledMediaPage>
  );
};

export default MediaPage;
