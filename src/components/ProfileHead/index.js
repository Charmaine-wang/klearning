import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledProfileHead = styled.div`
  width: 94vw;
  /* height: 50wh; */
  margin: 3vw auto;
  background-color: var(--card-color);
  border-radius: 10px;

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
  }
  .profileImage {
    width: 30%;
    padding-top: 30%;
    background: url("images/logo192.png");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 1px solid black;
  }
`;

const ProfileHead = props => {
  return (
    <StyledProfileHead>
      <div className="row">
        <div className="profileImage"></div>
        <div>
          <h2>Brandon Lane</h2>
          <h3>Filmskapare & Regissör</h3>
          <div className="row">
            <Button>Film</Button>
            <Button>Foto</Button>
          </div>
        </div>
      </div>
      <div>
        <h2>About</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
      </div>
    </StyledProfileHead>
  );
};

export default ProfileHead;
