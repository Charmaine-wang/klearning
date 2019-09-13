import React from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import Navbar from "../../components/Navbar";

const StyledProfile = styled.div``;

const Profile = props => {
  return (
    <StyledProfile>
      <Navbar></Navbar>
      <ProfileHead></ProfileHead>
    </StyledProfile>
  );
};

export default Profile;
