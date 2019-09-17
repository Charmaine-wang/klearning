import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: white;
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 3vh 3vh 3vh;

  & > div {
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h3>About</h3>
        <h3>FAQ</h3>
        <h3>Terms</h3>
      </div>
      <h3>© Kultur akademin, inc, 2019</h3>
    </StyledFooter>
  );
};

export default Footer;
