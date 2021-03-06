import React from "react";
import styled from "styled-components";

const StyledUploadButton = styled.button`
  width: ${props => (props.buttonWidth ? props.buttonWidth : "auto")};
  height: ${props => (props.buttonHeight ? props.buttonHeight : "auto")};
  background-color: ${props => (props.bgColor ? props.bgColor : "white")};
  border: ${props => (props.border ? props.border : "1px solid #e0e0e0")};
  color: ${props => (props.textColor ? props.textColor : "var(--font-color)")};
  padding: 8px 22px;
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  text-decoration: none;
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "400")};
  border-radius: 8px;
  margin: ${props => (props.margin ? props.margin : "0")};

  .upload-image-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .upload-image-div > img {
    margin: 0px 16px;
  }

  &:hover {
    color: #cd7b2a;
    text-decoration: underline;
  }
  &:active {
    color: #cd7b2a;
    text-decoration: underline;
  }
`;
const UploadButton = ({ btnName, btnImage, ...props }) => {
  // eslint-disable-next-line no-undef
  return (
    <StyledUploadButton {...props}>
      <div className="upload-image-div">
        <img src={btnImage} alt="upload" />
        {btnName}
      </div>
    </StyledUploadButton>
  );
};

export default UploadButton;
