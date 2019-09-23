import React from "react";
import styled from "styled-components";
import Button from "../../Button";

const StyledHandInUpload = styled.div`
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;

  .upload-hand-in > h2 {
    color: black;
    margin-bottom: 16px;
  }
  .upload-hand-in > p {
    line-height: 1.2rem;
  }
  .upload-div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HandInUpload = ({ header, paragraph }) => {
  return (
    <StyledHandInUpload>
      <div className="upload-hand-in">
        <h2>{header}</h2>
        <p>{paragraph}</p>
        <div className="upload-div">
          <Button btnName="Ladda upp fil" />
        </div>
      </div>
    </StyledHandInUpload>
  );
};
export default HandInUpload;
