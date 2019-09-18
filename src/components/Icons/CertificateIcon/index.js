import React from 'react'
import styled from 'styled-components'
const StyledCertificate = styled.svg`
  path {


  
  }
`
const CertificateIcon= (props) => {
    return (
      <StyledCertificate
        {...props}
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

          <path
            d="M45.5 7H21C19.1435 7 17.363 7.7375 16.0503 9.05025C14.7375 10.363 14 12.1435 14 14V70C14 71.8565 14.7375 73.637 16.0503 74.9497C17.363 76.2625 19.1435 77 21 77H63C64.8565 77 66.637 76.2625 67.9497 74.9497C69.2625 73.637 70 71.8565 70 70V31.5L45.5 7Z"
            stroke="#6D6D6D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M45.5 7V31.5H70"
            stroke="#6D6D6D"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31.3333 42H52.6666C53.3739 42 54.0521 42.281 54.5522 42.781C55.0523 43.2811 55.3333 43.9594 55.3333 44.6667V52.6667C55.3333 56.2029 53.9285 59.5943 51.428 62.0948C48.9276 64.5952 45.5362 66 42 66C40.249 66 38.5152 65.6551 36.8975 64.9851C35.2798 64.315 33.81 63.3329 32.5719 62.0948C30.0714 59.5943 28.6666 56.2029 28.6666 52.6667V44.6667C28.6666 43.9594 28.9476 43.2811 29.4477 42.781C29.9478 42.281 30.626 42 31.3333 42V42Z"
            stroke="#00C9AC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36.6666 51.3333L42 56.6666L47.3333 51.3333"
            stroke="#00C9AC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
   
      </StyledCertificate>
    );
}

export default CertificateIcon