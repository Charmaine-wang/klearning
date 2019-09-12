import React from "react";
import styled from "styled-components";

const StyledProfileHead = styled.div`
  width: 95%;
  height: 50wh;
  border-radius: 5px;
  background-color: var(--card-color);
`;

const ProfileHead = props => {
  return (
    <StyledProfileHead>
      <div>
        <img></img>
        <h2>Brandon Lane</h2>
        <h3>Filmskapare & Regissör</h3>
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
