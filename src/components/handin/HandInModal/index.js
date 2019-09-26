import React from "react";
import styled from "styled-components";

const StyledHandInModal = styled.div`

// display: ${props => (props.isActive ? "flex" : "none")};
display:flex;
justify-content:center;
height:100%;
width:100%;
position:absolute;
background-color:white;
padding: 16px;
background-color: orange;
left:0%;
top:0%;
border-radius:10px;

`;

const HandInModal = ({ header, paragraph, pdfText }) => {
  return (
    <StyledHandInModal>
      <div>
        <h2>{header}</h2>
        <p>{paragraph}</p>
        <p>{pdfText}</p>
      </div>
    </StyledHandInModal>
  );
};

export default HandInModal;
