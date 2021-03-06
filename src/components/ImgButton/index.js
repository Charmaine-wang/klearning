import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const StyledImgButton = styled.div`
  width: 100%;
  height: 31.5vh;
  background-repeat: no-repeat;
  display: flex;
  padding: 5%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${props => props.imgBtn});
  background-size: cover;
  background-position: center;
  & > h1 {
    align-self: flex-start;
    color: var(--bg-color);
  }
`;

const ImgButton = props => {
  const { linkTo, btnName, buttonWidth, buttonHeight } = props;
  return (
    <StyledImgButton {...props} className="image-container">
      <h1 className="course-header">Self-tape international</h1>
      <NavLink to={linkTo}>
        <Button
          bgColor="var(--soft-orange)"
          textColor="white"
          btnName={btnName}
          buttonWidth={buttonWidth}
          buttonHeight={buttonHeight}
          className="image-apply-button"
          border="none"
        />
      </NavLink>
    </StyledImgButton>
  );
};

export default ImgButton;
