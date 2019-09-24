import React, { useState } from "react";
import styled from "styled-components";
import UploadButton from "../../UploadButton";
import Button from "../../Button";

const StyledHandInUpload = styled.div`
  h1 {
    margin-bottom: 10px;
  }
  margin: 16px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;

  .upload-hand-in > h2 {
    color: var(--black-font);
    margin-bottom: 16px;
    font-size: 20px;
  }
  .upload-hand-in > p {
    line-height: 1.2rem;
  }
  & > div:first-of-type {
    margin: 16px;
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    align-items: center;
    font-size: 12px;

    .upload-hand-in > h2 {
      color: var(--black-font);
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
      margin-top: 30%;
      margin-bottom: 16px;
    }
    .uploaded-file > p > span {
      color: var(--soft-orange);
    }
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HandInUpload = ({ header, paragraph, nextPart }) => {
  const [showFile, setShowFile] = useState(false);

  const UploadedFileName = "Selftape.png";

  return (
    <StyledHandInUpload>
      <h1>Inlämning</h1>
      <div>
        <div className="upload-hand-in">
          <h2>{header}</h2>
          <p>{paragraph}</p>
          <div className="upload-div">
            <UploadButton
              btnImage="images/upload.png"
              buttonWidth="100%"
              btnName="Ladda upp fil"
              onClick={() => {
                setShowFile(true);
              }}
            />
          </div>
          <div className="uploaded-file">
            {showFile && (
              <p>
                <span>Uppladdat: </span> {UploadedFileName}
              </p>
            )}
            {!showFile && (
              <p>
                <span>Inget uppladdat: </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        <Button btnName="Till översikten" buttonWidth="150px" />
        <Button
          btnName="Nästa Lektion"
          buttonWidth="150px"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInUpload>
  );
};
export default HandInUpload;
