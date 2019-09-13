import React from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import Navbar from "../../components/Navbar";
import CV from "../../components/CV";

const StyledProfile = styled.div`
  margin-top: 74px;
`;

const Profile = props => {
  return (
    <StyledProfile>
      <ProfileHead></ProfileHead>
      <CV></CV>
    </StyledProfile>
  );
};

export default Profile;
