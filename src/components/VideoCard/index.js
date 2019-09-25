import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import Button from "../Button";
import GridLayout from "../GridLayout";
import VideoPlayer from "../VideoPlayer";
// import getData from '../../data/tracks.json'

const StyledVideoCard = styled.div`
  display: ${props => (props.hidePlayer ? "none" : "block")};
  & > div .button-div {
    display: flex;
    width: 100%;
    height: 45px;
    justify-content: space-around;
    margin: 4% 0 0 0;
  }
`;

const VideoCard = ({ nextPart, hidePlayer, header, intro, previousPart }) => {
  return (
    <StyledVideoCard hidePlayer={hidePlayer}>
      {/* LÄGGA IN VIDEO */}
      <VideoPlayer videoId="l2vcqaClw-A" />
      <GridLayout padding="12% 2.5% 0 0">
        <CourseInformationCard
          header={header || "1. Introduktion"}
          colorHeader="var(--dark-grey)"
          paddingInfo="12% 6%"
          paragraph={
            intro ||
            'Välkommen till kursen "Self-tape - international".  I denna kurs kommer du att få lära dig användbara tekniker och tips som ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes.'
          }
        />
        <div className="button-div">
          <Button
            btnName="Till översikten"
            buttonWidth="160px"
            onClick={() => previousPart()}
          />
          <Button
            btnName="Nästa Lektion"
            buttonWidth="160px"
            onClick={() => nextPart()}
          />
        </div>
      </GridLayout>
    </StyledVideoCard>
  );
};

export default VideoCard;
