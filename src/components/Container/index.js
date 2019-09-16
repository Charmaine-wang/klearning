import React from "react";
import styled from "styled-components";

const Styledindex = styled.div`
  width: 94vw;
  height: auto;
  margin: 3vw auto;
`;

const index = ({ props, children }) => {
  return <Styledindex>{children}</Styledindex>;
};

export default index;
