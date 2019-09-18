import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledCV = styled.div`
  width: 94vw;
  margin: 3vw auto;
  background-color: var(--card-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    padding: 5vw 5vw 0 5vw;
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
    background: url("images/logo192.png");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 1px solid black;
  }

  .orange {
    color: var(--soft-orange);
  }

  .center {
    align-self: center;
    justify-self: center;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    font-size: 12px;
    border: solid 1px #e0e0e0;
    border-radius: 6px;
    padding: 2vw;
    margin: 2vw;
  }
`;

const CV = props => {
  return (
    <StyledCV>
      <div className="row">
        <div className="profileImage"></div>
        <div>
          <h2>Brandon Lane</h2>
          <h3 className="orange">Filmskapare & Regissör</h3>
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
        <h2>About</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.
        </h3>
      </div>
      <div>
        <h2>Jobs</h2>
        <ul>
          <li>
            Johnson & Johnson Film AB -{" "}
            <span className="orange">Filmfotograf</span>
          </li>
          <li>
            Sony Films - <span className="orange">Regisör</span>
          </li>
          <li>
            Multimedia AB -{" "}
            <span className="orange">Assisterande filmfotograf</span>
          </li>
        </ul>
      </div>
      <Button
        btnName="Ladda ner CV"
        className="center"
        buttonWidth="50vw"
        textColor="var(--soft-orange)"
        margin="0 0 15px 0"
        fontSize="12px"
      />
    </StyledCV>
  );
};

export default CV;
