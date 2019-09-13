import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color: white;
border: 1px solid #e7e7e7;
color: ${props => (props.textColor ? props.textColor : "black" )}

padding: 8px 22px;
text-align: center;
text-decoration: none;
font-size: ${props => (props.fontSize ? props.fontSize : "16px" )}
border-radius: 8px;

&:hover {
    color:#CD7B2A;
    text-decoration:underline;
}
&:active {
    color:#CD7B2A;
    text-decoration:underline;
}

//   width: ${props => (props.buttonWidth ? "20%" : props.buttonWidth)};
`
const Button = (props) => {

    return (
        <StyledButton {...props} >
        </StyledButton>
    )
}

export default Button;
