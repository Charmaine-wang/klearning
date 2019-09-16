import React from 'react'
import styled from "styled-components";



const StyledGridLayout = styled.div`
	height: ${props => (props.autoHeight ? props.autoHeight : 'auto')
	};
	width: 100%;
	transition: all 1s ease;
	margin: ${props => props.margin};
	position: relative;
	
	display: ${props => (props.hidden ? 'none' : 'grid')};
	grid-template-columns: ${props => props.colLayout};
	grid-template-rows: ${props => props.rowLayout};
    padding: ${props => (props.padding ? props.padding : '0')};
    background-color: ${props => (props.bgColor ? props.bgColor : '#ffffff')};
    `

const GridLayout = (props) => {
    return (
        <StyledGridLayout {...props}>
		
            
        </StyledGridLayout>
    )
}

export default GridLayout
