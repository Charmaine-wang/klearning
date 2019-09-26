import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import GridLayout from "../GridLayout";
import SoundPlayer from "../SoundPlayer";

import getData from "../../data/tracks.json";

const StyledSoundCard = styled.div`
  display: ${props => (props.hideSound ? "none" : "block")};

  & > div .button-div {
    display: flex;
    width: 100%;
    height: 43px;
    justify-content: space-around;
    margin: 0;
  }
`;

const clientId = process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID;

const soundOne = getData[23];
const SoundCard = ({ hideSound, header, intro }) => {
  return (
    <StyledSoundCard hideSound={hideSound}>
      <SoundPlayer
        title={soundOne.title}
        thumbnail={soundOne.thumbnail}
        clientId={clientId}
        resolveUrl={soundOne.trackUrl}
        duration={soundOne ? soundOne.duration / 1000 : 0}
      />
      <GridLayout padding="0 3vw">
        <CourseInformationCard
          heightAside={{ height: "20px" }}
          header={header || "1. Introduktion"}
          colorHeader="var(--black-font)"
          paddingInfo="5% 6%"
          paragraph={
            intro ||
            'Välkommen till kursen "Self-tape - international".  I denna kurs kommer du att få lära dig användbara tekniker och tips som ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes.'
          }
          paragraphtwo="Den här introduktionen kommer ge dig en översikt om vad kursen kommer innehålla, hur tjänsten fungerar och viktiga datum att hålla reda på. "
        />
      </GridLayout>
    </StyledSoundCard>
  );
};

export default SoundCard;
