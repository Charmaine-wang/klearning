import React from "react";
import styled from "styled-components";

const StyledSound = styled.svg`
  path {
  }
`;
const Sound = () => {
  return (
    <StyledSound
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M12.2017 1.23071L6.18414 6.15379H1.37012V13.5384H6.18414L12.2017 18.4615V1.23071Z"
          stroke="#6D6D6D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8604 5.48964C16.9885 6.64365 17.6222 8.20863 17.6222 9.8404C17.6222 11.4722 16.9885 13.0372 15.8604 14.1912M20.1087 1.14502C22.3649 3.45305 23.6324 6.583 23.6324 9.84656C23.6324 13.1101 22.3649 16.2401 20.1087 18.5481V1.14502Z"
          stroke="#6D6D6D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect
            width="24"
            height="19.6923"
            fill="white"
            transform="translate(0.371094)"
          />
        </clipPath>
      </defs>
    </StyledSound>
  );
};

export default Sound;
