import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: auto;
  margin: auto;
  padding: ${props => (props.padding ? props.padding : '16px')};
`;

const Container = ({ props, children }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
