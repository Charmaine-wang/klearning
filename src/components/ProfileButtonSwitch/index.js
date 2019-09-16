import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { NavLink } from "react-router-dom";

const StyledProfileButtonSwitch = styled.div`
  width: 90vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ProfileButtonSwitch = props => {
  return (
    <StyledProfileButtonSwitch>
      <NavLink to="/profile/intyg">
        <Button>Intyg</Button>
      </NavLink>
      <NavLink to="/profile/cv">
        <Button>CV</Button>
      </NavLink>
      <NavLink to="/profile/kurser">
        <Button>Kurser</Button>
      </NavLink>
    </StyledProfileButtonSwitch>
  );
};

export default ProfileButtonSwitch;