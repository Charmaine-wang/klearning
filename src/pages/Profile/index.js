import React, { useState } from "react";
import styled from "styled-components";
import ProfileHead from "../../components/ProfileHead";
import CV from "../../components/CV";
import MyCourses from "../../components/MyCourses";
import MyCertificates from "../../components/MyCertificates";
import FixedContainer from "../../components/FixedContainer";
import Button from "../../components/Button";

const StyledProfile = styled.div`
  margin-top: 74px;
  .recommended {
    width: 94vw;
    margin: auto;
  }

  .buttonSwitch {
    width: 90vw;
    margin: auto;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const Profile = props => {
  const [profileComponent, setProfileComponent] = useState("intyg");

  function switchComponent() {
    if (profileComponent === "certificates") {
      return <MyCertificates></MyCertificates>;
    }
    if (profileComponent === "cv") {
      return <CV></CV>;
    }
    if (profileComponent === "courses") {
      return <MyCourses></MyCourses>;
    }
  }

  return (
    <StyledProfile>
      <ProfileHead></ProfileHead>
      <div className="buttonSwitch">
        <Button onClick={() => setProfileComponent("certificates")}>
          Intyg
        </Button>
        <Button onClick={() => setProfileComponent("cv")}>CV</Button>
        <Button onClick={() => setProfileComponent("courses")}>Kurser</Button>
      </div>
      {switchComponent()}
      <div className="recommended">
        <h1>Rekommenderade kurser</h1>
      </div>
      <FixedContainer></FixedContainer>
    </StyledProfile>
  );
};

export default Profile;
