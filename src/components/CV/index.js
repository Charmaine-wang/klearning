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
  box-shadow: var(--shadow);
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
    background: url("/images/Photos/Emmy.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }

  .orange {
    color: var(--soft-orange);
  }

  .center {
    align-self: center;
    justify-self: center;
  }

  ul {
    width: 100%;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 100%;
  }

  .buttonDiv {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (min-width: 700px) {
      width: 100%;
    }
  }

  .icon-placeholder {
    background-image: url("/images/Ikoner/edit-2.svg");
    background-position: center;
    background-size: cover;
    width: 30px;
    height: 30px;
    align-self: flex-start;
    @media only screen and (min-width: 700px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const CV = () => {
  return (
    <StyledCV>
      <div className="row">
        <div>
          <h2>Piper Main</h2>
          <h5 className="orange">Skådespelerska</h5>
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
          <div className="buttonDiv">
            <Button
              btnName="Ladda ner CV"
              className="center"
              buttonWidth="100%"
              buttonHeight="3.5em"
              textColor="var(--soft-orange)"
              margin="2vw"
              fontSize="12px"
              fontWeight="600"
            />
          </div>
        </ul>
      </div>
    </StyledCV>
  );
};

export default CV;
