import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import GridLayout from "../GridLayout";
import VideoPlayer from "../VideoPlayer";

const StyledVideoCard = styled.div`
  display: ${props => (props.hidePlayer ? "none" : "block")};
`;

const VideoCard = ({ hidePlayer, header, intro }) => {
  return (
    <StyledVideoCard hidePlayer={hidePlayer}>
      {/* LÄGGA IN VIDEO */}
      <VideoPlayer videoId="l2vcqaClw-A" />
      <GridLayout padding="1% 3vw">
        <CourseInformationCard
          heightAside={{ height: "20px" }}
          header={header || "1. Introduktion"}
          colorHeader="var(--dark-grey)"
          paddingInfo="5% 6%"
          paragraph={
            intro ||
            'Välkommen till kursen "Self-tape - international".  I denna kurs kommer du att få lära dig användbara tekniker och tips som ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes. '
          }
          paragraphtwo=" Den här introduktionen kommer ge dig en översikt om vad kursen kommer innehålla, hur tjänsten fungerar och viktiga datum att hålla reda på. "
        />
      </GridLayout>
    </StyledVideoCard>
  );
};

export default VideoCard;
