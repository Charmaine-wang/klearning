import React from 'react'
import styled from 'styled-components'
import Button from "../Button"

const StyledAllCourses = styled.button `
/* width: 100%; */
padding: 0;
display: flex;


`



const AllCourses = (props) => {
    return (
        <StyledAllCourses>
            <Button btnName='Scenkonst' buttonHeight='50%' />
            <Button btnName='film' buttonHeight='50%' />
            <Button btnName='TV' buttonHeight='50%' />
            <Button btnName='Musik' buttonHeight='50%' />
        </StyledAllCourses>
    );
}

export default AllCourses

