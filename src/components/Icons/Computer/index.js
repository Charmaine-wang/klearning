import React from "react";
import styled from "styled-components";

const StyledComputer = styled.svg`
  path {
  }
`;
const Computer = props => {
  return (
    <StyledComputer
      {...props}
      width="90"
      height="80"
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.4001 1.60001H10.1334C5.4206 1.60001 1.6001 5.42051 1.6001 10.1333V52.8C1.6001 57.5128 5.4206 61.3333 10.1334 61.3333H78.4001C83.1129 61.3333 86.9334 57.5128 86.9334 52.8V10.1333C86.9334 5.42051 83.1129 1.60001 78.4001 1.60001Z"
        stroke="#6D6D6D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.7333 78.4H61.8666"
        stroke="#6D6D6D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.8 61.3334V78.4"
        stroke="#6D6D6D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.8 30.5371V32.0091C60.7981 35.4594 59.6808 38.8166 57.615 41.5801C55.5491 44.3435 52.6453 46.3651 49.3366 47.3434C46.0279 48.3216 42.4917 48.2042 39.2552 47.0085C36.0187 45.8128 33.2555 43.6029 31.3776 40.7084C29.4997 37.814 28.6077 34.39 28.8347 30.9473C29.0617 27.5045 30.3956 24.2273 32.6373 21.6045C34.879 18.9817 37.9085 17.1538 41.2739 16.3934C44.6394 15.633 48.1605 15.9809 51.312 17.3852"
        stroke="#00C9AC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.8 19.2088L44.8 35.2248L40 30.4248"
        stroke="#00C9AC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledComputer>
  );
};

export default Computer;
