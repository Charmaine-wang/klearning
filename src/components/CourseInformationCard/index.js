import React from 'react';
import styled from "styled-components";

const StyledCourseInformationCard = styled.div`

    .course-information-card{
        background-color: white;
        margin: 16px;
        padding: 16px;
        border-radius: 10px;
    }
    
    h1{
        color: var(--soft-orange);
        padding-bottom: 1.7vw;
        font-weight: 500;
    }
    p{
        line-height: 1.7em;
    }
`;

const CourseInformationCard = (props) =>{

    return(
        <StyledCourseInformationCard>
        <div>
            <div className="course-information-card">
                <h1>{props.header}</h1>
                <p>{props.paragraph}</p>
            </div>
        </div>
        </StyledCourseInformationCard>
    );

};

export default CourseInformationCard;