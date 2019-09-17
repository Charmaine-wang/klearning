import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const StyledProfileButtonSwitch = styled.div`
  width: 90vw;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ProfileButtonSwitch = () => {
  return (
    <StyledProfileButtonSwitch>
      <Button>Intyg</Button>
      <Button>CV</Button>
      <Button>Kurser</Button>
    </StyledProfileButtonSwitch>
  );
};

export default ProfileButtonSwitch;
