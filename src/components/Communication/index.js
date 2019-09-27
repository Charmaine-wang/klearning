import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledCommunication = styled.div`
  display: flex;
  width: 100%;
  height: 70vh;
  padding: 5%;
  /* position: absolute; */
  flex-direction: column;
  border-radius: 10px;
  background: var(--card-color);
  justify-content: space-around;
  align-items: center;

  & > h3 {
    font-weight: 600;
  }
  & > p {
    line-height: 165%;
    text-align: center;
  }
  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
  }
`;
const Communication = props => {
  return (
    <StyledCommunication {...props}>
      <h2>Kurskommunikation</h2>
      <img src="/images/Illustrations/communication.svg" alt="illustration" />
      <h3>Skype gruppen</h3>
      <p>
        Vi har skapat en Skype-grupp för dig och dina kursvänner, så att ni kan
        hålla kontakt under kursens gång. Allt du behöver är ett Skypekonto och
        sedan är det bara att sätta igång!
      </p>
      <Button
        btnName="Skype grupp"
        buttonWidth="157px"
        bgColor="var(--soft-orange)"
        textColor="var(--card-color)"
        activeColor="var(--card-color)"
      />
    </StyledCommunication>
  );
};

export default Communication;
