import React from 'react'
import styled from "styled-components";



const StyledGridLayout = styled.div`
	height: ${props => (props.autoHeight ? props.autoHeight : '100%')
	};
	width: ${props => props.widthGrid ? props.widthGrid : '100%'};
	transition: all 1s ease;
	margin: ${props => props.marginGrid};
	position: relative;
	display: ${props => (props.hidden ? 'none' : 'grid')};
	grid-template-columns: ${props => props.colLayout};
	grid-template-rows: ${props => props.rowLayout};
	grid-gap: ${props => props.gridGap ? props.gridGap : '20px 0'};
    padding: ${props => (props.padding ? props.padding : '0')};
    background-color: ${props => (props.bgColor ? props.bgColor : '#F5F5F5')};
	border-radius: ${props => props.gridRadius};
	/* margin: 0 8%; */
	/* & > img{
		height: 400px;
	} */
    `

const GridLayout = (props) => {
    return (
        <StyledGridLayout {...props}>
	
		
            
        </StyledGridLayout>
    )
}

export default GridLayout
