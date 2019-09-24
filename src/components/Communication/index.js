import React from "react";
import styled from "styled-components";
import People from "../Icons/People";
import Button from "../Button";

const StyledCommunication = styled.div`
  display: flex;
  width: 95vw;
  height: 50vh;
  padding: 5%;
  /* position: absolute; */
  flex-direction: column;
  border-radius: 10px;
  background: var(--card-color);
  justify-content: space-around;
  align-items: center;
  & > p {
    line-height: 26px;
    text-align: center;
  }
`;
const Communication = props => {
  return (
    <StyledCommunication {...props}>
      <h2>Kommunikation</h2>
      <People />
      <h3>Skype gruppen</h3>
      <p>
        Vi har skapat en skype grupp för dig och dina kursvänner, så att ni kan
        hålla kontakt under kursens gång. Allt du behöver är ett skypekonto och
        sedan är det bara att skriva på!
      </p>
      <Button btnName="Skype grupp" buttonWidth="157px" />
    </StyledCommunication>
  );
};

export default Communication;
