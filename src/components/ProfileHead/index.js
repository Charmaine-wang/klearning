import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledProfileHead = styled.div`
  width: 100%;
  background-color: var(--card-color);
  border-radius: 10px;
  box-shadow: var(--shadow);

  h2 {
    margin-bottom: 5px;
  }
  h5 {
    color: var(--soft-orange);
  }
  & > div {
    padding: 5vw;
  }

  & > div:first-of-type {
    padding-bottom: 0;

    & > div:last-of-type {
      margin-left: 5vw;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 5vw;
  }
  .profileImage {
    width: 30%;
    padding-top: 30%;
    background: url("/images/Photos/Emmy.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }
`;

const ProfileHead = () => {
  return (
    <StyledProfileHead>
      <div className="row">
        <div className="profileImage" />
        <div>
          <h2>Piper Main</h2>
          <h5>Skådespelerska</h5>
          <div className="row">
            <Button
              btnName="Film"
              textColor="var(--soft-orange)"
              margin="0 15px 0 0"
            />
            <Button btnName="Foto" textColor="var(--soft-orange)" />
          </div>
        </div>
      </div>
      <div>
        <h2>Om mig</h2>
        <h3>
          Har en lång bakgrund inom friteatergrupper samt independentfilm runt
          om i Skandinavien.
        </h3>
      </div>
    </StyledProfileHead>
  );
};

export default ProfileHead;
