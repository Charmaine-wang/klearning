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
    width: 100%;
}
.information-numbers{
    display:flex;
}

img{
}

`

const CourseChoicesCard = () => {
    return(
        <StyledCourseChoicesCard>
            <div className="choices-card">
                <div className="choices">
                    <img src="images/volume.png" alt="Volume"/>
                    <p>Lyssna</p>
                    <img src="images/read.png" alt="Read"/>
                    <p>Läs</p>
                    <img src="images/watch.png" alt="Watch"/>
                    <p>Titta</p>
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