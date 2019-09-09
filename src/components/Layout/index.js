import React from 'react'
import styled from "styled-components";

const StyledLayout = styled.div`
	height: ${props => (props.autoHeight ? 'auto' : '100%')};
	width: 100%;
	transition: all 1s ease;
	margin: ${props => props.margin};
	position: relative;
	display: ${props => (props.hidden ? 'none' : 'grid')};
	grid-template-columns: ${props => props.colLayout};
	grid-template-rows: ${props => props.rowLayot};
    padding: ${props => (props.padding ? props.padding : '0')};
    background-color: ${props => (props.bgColor ? props.bgColor : 'yellow')};
    `

const Layout = (props) => {
    return (
        <StyledLayout {...props}>
            
        </StyledLayout>
    )
}

export default Layout
