import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const StyledProfileButtonSwitch = styled.div`
  width: 90vw;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ProfileButtonSwitch = props => {
  return (
    <StyledProfileButtonSwitch>
      <Button>Intyg</Button>
      <Button>CV</Button>
      <Button>Kurser</Button>
    </StyledProfileButtonSwitch>
  );
};

export default ProfileButtonSwitch;
