import React from 'react';
import styled from "styled-components";

const StyledCourseInformation = styled.div`


`;

const CourseInformation = (props) =>{


    return(
        <>
            <div>
                <h1>{props.courseHeader}</h1>
                <p>{props.courseHeaderParagraph}</p>
            </div>
            <div>
                <h2>{props.aboutCourseHeader}</h2>
                <p>{props.aboutCourseParagraph}</p>
            </div>
            <div>
                <h2>{props.demographHeader}</h2>
                <p>{props.demographHeaderParagraph}</p>
            </div>
            <div>
                <Button>Ansök</Button>
            </div>
        </>
    );

};

export default CourseInformation;