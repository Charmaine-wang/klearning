import React from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import ProfileButtonSwitch from "../../components/ProfileButtonSwitch";
import CV from "../../components/CV";
import { Route, Switch } from "react-router-dom";
import MyCourses from "../../components/MyCourses";

const StyledProfile = styled.div`
  margin-top: 74px;
`;

const Profile = props => {
  return (
    <StyledProfile>
      <ProfileHead></ProfileHead>
      <ProfileButtonSwitch></ProfileButtonSwitch>
      <Switch>
        <Route path="/profile/intyg" component={CV} />
        <Route path="/profile/CV" component={CV} />
        <Route path="/profile/kurser" component={MyCourses} />
      </Switch>
    </StyledProfile>
  );
};

export default Profile;
