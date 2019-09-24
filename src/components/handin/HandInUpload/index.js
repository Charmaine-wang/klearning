import React, { useState } from "react";
import styled from "styled-components";
import UploadButton from "../../UploadButton";

const StyledHandInUpload = styled.div`
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
`;

const HandInUpload = ({ header, paragraph }) => {
  const [showFile, setShowFile] = useState(false);

  const UploadedFileName = "Selftape.png";

  return (
    <StyledHandInUpload>
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
    </StyledHandInUpload>
  );
};
export default HandInUpload;
