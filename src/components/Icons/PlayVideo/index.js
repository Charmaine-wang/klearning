import React from "react";
import styled from "styled-components";

const StyledPlayVideo = styled.svg`
  path {
  }
`;
const PlayVideo = () => {
  return (
    <StyledPlayVideo
      width="25"
      height="18"
      viewBox="0 0 25 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M23.5808 3.04695C23.4596 2.55172 23.2127 2.09798 22.8651 1.73154C22.5176 1.36511 22.0816 1.09896 21.6013 0.959989C19.8462 0.521729 12.8261 0.521729 12.8261 0.521729C12.8261 0.521729 5.80604 0.521729 4.05102 1.00173C3.57068 1.1407 3.13471 1.40685 2.78714 1.77328C2.43957 2.13972 2.19272 2.59346 2.07151 3.08869C1.75032 4.91013 1.5932 6.75788 1.60215 8.60868C1.5907 10.4734 1.74782 12.3353 2.07151 14.1704C2.20514 14.6503 2.45752 15.0867 2.80428 15.4377C3.15104 15.7887 3.58045 16.0422 4.05102 16.1739C5.80604 16.6539 12.8261 16.6539 12.8261 16.6539C12.8261 16.6539 19.8462 16.6539 21.6013 16.1739C22.0816 16.0349 22.5176 15.7688 22.8651 15.4023C23.2127 15.0359 23.4596 14.5822 23.5808 14.0869C23.8995 12.2792 24.0566 10.4456 24.0501 8.60868C24.0616 6.74394 23.9045 4.88211 23.5808 3.04695Z"
          stroke="#6D6D6D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5298 12.0208L16.3969 8.60859L10.5298 5.19641V12.0208Z"
          stroke="#6D6D6D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="17.2174"
            fill="white"
            transform="translate(0.919922)"
          />
        </clipPath>
      </defs>
    </StyledPlayVideo>
  );
};

export default PlayVideo;