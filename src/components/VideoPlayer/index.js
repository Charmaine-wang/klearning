import YoutubePlayer from "@u-wave/react-youtube";
import React from "react";
import styled from "styled-components";

const StyledVideoPlayer = styled(YoutubePlayer)`
  width: 100%;
  height: 230px;
`;

const VideoPlayer = ({ videoId }) => {
  return <StyledVideoPlayer video={videoId} />;
};

export default VideoPlayer;
