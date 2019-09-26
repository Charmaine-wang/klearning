import React from "react";
import styled from "styled-components";

const StyledCourseInformationCard = styled.div`
  margin: 16px 0px;

  .course-information-card {
    box-shadow: var(--shadow);
    background-color: white;
    padding: ${props => (props.paddingInfo ? props.paddingInfo : "16px")};
    border-radius: 10px;
    margin: 0;
  }

  h2 {
    font-size: 20px;
    color: ${props =>
      props.colorHeader ? props.colorHeader : "var(--black-font)"};
    padding-bottom: 1.7vw;
    font-weight: 500;
    // margin: 16px 0px;
  }
  p {
    line-height: 1.7em;
  }

  .course-information-card > a {
    text-decoration: none;
    color: var(--soft-orange);
    line-height: 1.7em;
  }
`;

const CourseInformationCard = ({
  header,
  paragraph,
  paragraphtwo,
  colorHeader,
  paddingInfo,
  linkHref,
  linkText,
  heightAside
}) => {
  return (
    <StyledCourseInformationCard
      colorHeader={colorHeader}
      paddingInfo={paddingInfo}
    >
      <div className="course-information-card">
        <h2>{header}</h2>
        <p>{paragraph}</p>
        <aside style={heightAside} />
        <p>{paragraphtwo}</p>
        <a className="link-tag" href={linkHref}>
          {linkText}
        </a>
      </div>
    </StyledCourseInformationCard>
  );
};

export default CourseInformationCard;
