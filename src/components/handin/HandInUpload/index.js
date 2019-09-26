import React, { useState } from "react";
import styled from "styled-components";
import UploadButton from "../../UploadButton";
import Button from "../../Button";

const StyledHandInUpload = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  & > div:first-of-type {
    box-shadow: var(--shadow);
    padding: 16px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    margin-bottom: 10px;

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
  }
  .row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HandInUpload = ({ header, paragraph, nextPart, previousPart }) => {
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
              btnImage="/images/Ikoner/Ladda-up.svg"
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
        <Button
          btnName="Bakåt"
          buttonWidth="150px"
          onClick={() => previousPart()}
        />
        <Button
          btnName="Nästa"
          buttonWidth="150px"
          textColor="var(--soft-orange)"
          onClick={() => nextPart()}
        />
      </div>
    </StyledHandInUpload>
  );
};
export default HandInUpload;
