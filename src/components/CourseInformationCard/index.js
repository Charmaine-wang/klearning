import React from 'react';
import styled from "styled-components";
import Button from "../Button";

const StyledCourseInformationCard = styled.div`

    information-container{
        height: 2vh;
        background-color:white;
    }

`;

const CourseInformationCard = (props) =>{

    return(
        <div className="information-container">
            <div>
                <h1>{props.header}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
    );

};

export default CourseInformationCard;