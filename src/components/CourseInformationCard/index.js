import React from "react";
import styled from "styled-components";

const StyledCourseInformationCard = styled.div`
  .course-information-card {
    background-color: white;
    margin: 16px;
    padding: ${props => (props.paddingInfo ? props.paddingInfo : "16px")};
    border-radius: 10px;
    margin: 0;
  }

  h1 {
    color: ${props =>
      props.colorHeader ? props.colorHeader : "var(--soft-orange)"};
    padding-bottom: 1.7vw;
    font-weight: 500;
  }
  p {
    line-height: 1.7em;
  }
`;

const CourseInformationCard = ({
  header,
  paragraph,
  colorHeader,
  paddingInfo
}) => {
  return (
    <StyledCourseInformationCard
      colorHeader={colorHeader}
      paddingInfo={paddingInfo}
    >
      <div>
        <div className="course-information-card">
          <h1>{header}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </StyledCourseInformationCard>
  );
};

export default CourseInformationCard;
