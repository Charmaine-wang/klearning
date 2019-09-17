import React from 'react'
import styled from 'styled-components'


const StyledContainerSlide= styled.div `
display: flex;
position: relative;
/* width: auto; */
width: 100%;
height: 100%;
align-items: center;
 & > div {
   margin: 0 4% 0 0; 
 }
/* background-color:pink; */


`

const ContainerSlider = (props) => {
    return (
      <StyledContainerSlide {...props}>

        
      </StyledContainerSlide>
    );
}

export default ContainerSlider
