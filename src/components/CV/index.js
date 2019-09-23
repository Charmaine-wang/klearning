import React from "react";
import styled from "styled-components";
import Button from "../Button";

const StyledCV = styled.div`
  width: 100%;
  background-color: var(--card-color);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: var(--black-font);
  }

  h2 {
    margin-bottom: 5px;
  }
  & > div {
    padding: 5vw 5vw 0 5vw;
  }

  & > div:first-of-type {
    padding-bottom: 0;

    h2 {
      color: var(--black-font);
      font-size: 20px;
    }

    & > div:last-of-type {
      margin-left: 5vw;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .profileImage {
    width: 30%;
    padding-top: 30%;
    background: url("images/logo192.png");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    border: 1px solid var(--black-font);
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
    height: 3.5em;
    font-size: 12px;
    border: solid 1px var(--light-grey);
    border-radius: 6px;
    padding: 2vw;
    margin: 2vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: var(--dark-grey);
  }

  .icon-placeholder {
    background-color: var(--black-font);
    width: 20px;
    height: 20px;
    align-self: flex-start;
  }
`;

const CV = () => {
  return (
    <StyledCV>
      <div className="row">
        <div>
          <h2>Brandon Lane</h2>
          <h5 className="orange">Skådespelare</h5>
        </div>
        <div className="icon-placeholder" />
      </div>
      <div>
        <h2>Om mig</h2>
        <h3>
          Har en lång bakgrund inom friteatergrupper samt independentfilm runt
          om i Skandinavien. Har tidigare jobbat mycket bakom kameran parallellt
          med mitt skådespeleri. <br /> Önskar nu försöka ta mig an
          skådespelarjobb i andra länder och vill gärna nätverka med andra i
          samma situation.
        </h3>
      </div>
      <div>
        <h2>Tidigare jobb</h2>
        <ul>
          <li>
            Johnson & Johnson Film AB -{" "}
            <span className="orange"> Filmfotograf</span>
          </li>
          <li>
            Sony Films - <span className="orange"> Regisör</span>
          </li>
          <li>
            Multimedia AB -{" "}
            <span className="orange"> Assisterande filmfotograf</span>
          </li>
        </ul>
      </div>
      <Button
        btnName="Ladda ner CV"
        className="center"
        buttonWidth="50vw"
        buttonHeight="3.5em"
        textColor="var(--soft-orange)"
        margin="0 0 15px 0"
        fontSize="12px"
        fontWeight="600"
      />
    </StyledCV>
  );
};

export default CV;
