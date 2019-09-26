/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { PlayButton, Timer } from "react-soundplayer/components";
import { withSoundCloudAudio } from "react-soundplayer/addons";

const StyledSound = styled.div`
  height: 35vh;
  width: 100%;
  background-image: url(${props => props.thumbnail});
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;

  & > .info-sound {
    width: 100vw;
    padding: 2%;
    background-color: white;
    align-items: center;
    display: flex;
  }
  .play-sound {
    width: 40%;
    > button {
      width: 60%;
      color: #6d6d6d;
    }
  }
  .div-h3 {
    height: 100%;
    & > h3 {
      height: 100%;
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
            onPlayClick={() => {}}
            {...props}
          />
        </div>
        <div className="div-h3">
          <h3>{props.title}</h3>
          <Timer className="custom-player-timer" {...props} />
        </div>
      </div>
    </StyledSound>
  );
});

export default Sound;
