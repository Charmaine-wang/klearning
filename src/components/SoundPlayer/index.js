/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { PlayButton, Timer } from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";

const StyledSound = styled.div`
  height: 30vh;
  width: 100%;
  background-image: url(${props => props.thumbnail});
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  & > .info-sound {
    width: 100vw;
    height: 8vh;
    background-color: white;
    align-items: center;
    display: flex;
  }
  .play-sound {
    width: 40%;
    > button {
      width: 60%;
      color: red;
    }
  }
`;

const Sound = withSoundCloudAudio(props => {
  return (
    <StyledSound {...props}>
      <div className="info-sound">
        <div className="play-sound">
          <PlayButton
            className="custom-player-btn"
            onPlayClick={() => {
              console.log("play button clicked!");
            }}
            {...props}
          />
        </div>
        <div>
          <h3>{props.title}</h3>
          <Timer className="custom-player-timer" {...props} />
        </div>
      </div>
    </StyledSound>
  );
});

export default Sound;
