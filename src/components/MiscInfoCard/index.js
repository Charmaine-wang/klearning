import React from 'react';
import styled from 'styled-components';

const StyledMiscInfoCard = styled.div`
margin: 16px;
padding: 16px;
background-color: white;
border-radius: 10px;

h2{
    color: var(--soft-orange);
    margin-top: 16px;
    margin-bottom: 4px;

}
p{
    line-height: 1.7em;
}

`

const MiscInfoCard = (props) => {
    
    return(
        <StyledMiscInfoCard>
            <div>
                <h2>ANTAL PLATSER</h2>
                <p>{props.seatsAmouts} platser</p>
            </div>
            <div>
                <h2>KURSDATUM</h2>
                <p>Från: {props.startDate}</p>
                <p>Till: {props.endDate}</p>
            </div>
            <div>
                <h2>ANSÖK SENAST</h2>
                <p>{props.applyDate}</p>
            </div>
            <div>
                <h2>MEDVERKANDE</h2>
                <p>{props.participator}</p>
            </div>
            <div>
                <h2>AKTIVITET</h2>
                <p>{props.activity}</p>
            </div>
            <div>
                <h2>SPRÅK</h2>
                <p>{props.language}</p>
            </div>
            <div>
                <h2>ÖVRIGT</h2>
                <p>{props.moreInfo}</p>
            </div>
        </StyledMiscInfoCard>
    )
}

export default MiscInfoCard;