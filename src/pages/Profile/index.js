import React from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import ProfileButtonSwitch from "../../components/ProfileButtonSwitch";
import CV from "../../components/CV";

const StyledProfile = styled.div`
  margin-top: 74px;
`;

const Profile = props => {
  return (
    <StyledProfile>
      <ProfileHead></ProfileHead>
      <ProfileButtonSwitch></ProfileButtonSwitch>
      <CV></CV>
    </StyledProfile>
  );
};

export default Profile;
