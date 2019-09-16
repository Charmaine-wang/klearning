import React from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import ProfileButtonSwitch from "../../components/ProfileButtonSwitch";
import CV from "../../components/CV";
import { Route, Switch } from "react-router-dom";
import MyCourses from "../../components/MyCourses";
import MyCertificates from "../../components/MyCertificates";

const StyledProfile = styled.div`
  margin-top: 74px;
  .recommended {
    width: 94vw;
    margin: auto;
  }
`;

const Profile = props => {
  return (
    <StyledProfile>
      <ProfileHead></ProfileHead>
      <ProfileButtonSwitch></ProfileButtonSwitch>
      <Switch>
        <Route path="/profile/intyg" component={MyCertificates} />
        <Route path="/profile/CV" component={CV} />
        <Route path="/profile/kurser" component={MyCourses} />
      </Switch>
      <div className="recommended">
        <h1>Rekommenderade kurser</h1>
      </div>
    </StyledProfile>
  );
};

export default Profile;
