import React from 'react'
import styled from 'styled-componets'

const StyledButton = styled.div`
  width: ${props => (props.buttonWidth ? "20%" : props.buttonWidth)};
 
`;

const Button = () => {
    return (
        <StyledButton {...props}>
            
        </StyledButton>
    )
}

export default Button
