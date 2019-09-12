import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button `
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  border: 1px solid #gray;
  width: ${props => (props.buttonWidth ? "20%" : props.buttonWidth)};
`
const Button = (props) => {

    return (
        <StyledButton {...props} >
            <p>{props.buttonText}</p>
        </StyledButton>
    )
}

export default Button;
