import React from 'react';
import styled from 'styled-components';


const StyledCourseChoicesCard = styled.div`
background-color:white;
margin: 16px;
padding: 16px;
border-radius: 10px;

.choices{
    display: flex;
    // flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.information-numbers{
    display:flex;
}

`

const CourseChoicesCard = () => {
    return(
        <StyledCourseChoicesCard>
            <div className="choices-card">
                <div className="choices">
                    <img src="" alt="yo"/>
                    <img src="" alt="hej"/>
                    <img src="" alt="pa"/>
                </div>
                <div>----</div>
                <div className="information-numbers">
                    <p>8 lektioner</p>
                    <p> 3 inlämmingr</p>
                    <p>4 timmar</p>
                </div>

            </div>

        </StyledCourseChoicesCard>
    )
}

export default CourseChoicesCard;