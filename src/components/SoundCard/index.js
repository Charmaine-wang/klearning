import React from "react";
import styled from "styled-components";
import CourseInformationCard from "../CourseInformationCard";
import Button from "../Button";
import GridLayout from "../GridLayout";
import SoundPlayer from "../SoundPlayer";

import getData from "../../data/tracks.json";

const StyledSoundCard = styled.div`
  display: ${props => (props.hideSound ? "none" : "block")};
  & > div .button-div {
    display: flex;
    width: 100%;
    height: 45px;
    justify-content: space-around;
    margin: 4% 0 0 0;
  }
`;

const clientId = process.env.REACT_APP_SOUNDCLOUD_CLIENT_ID;

const soundOne = getData[23];
const SoundCard = props => {
  return (
    <StyledSoundCard {...props}>
      <SoundPlayer
        title={soundOne.title}
        thumbnail={soundOne.thumbnail}
        clientId={clientId}
        resolveUrl={soundOne.trackUrl}
        duration={soundOne ? soundOne.duration / 1000 : 0}
      />
      <GridLayout padding="12% 2.5% 0 0">
        <CourseInformationCard
          header="1. Introduktion"
          colorHeader="var(--black-font)"
          paddingInfo="12% 6%"
          paragraph='Välkommen till kursen "Self-tape - international".  I denna kurs kommer du att få lära dig användbara tekniker och tips som ger dig insikter om vad rollsättare och regissörer tittar på och letar efter i self tapes.'
        />
        <div className="button-div">
          <Button btnName="Till översikten" buttonWidth="160px" />
          <Button btnName="Nästa Lektion" buttonWidth="160px" />
        </div>
      </GridLayout>
    </StyledSoundCard>
  );
};

export default SoundCard;
