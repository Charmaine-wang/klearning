import React from "react";
import styled from "styled-components";

const StyledCertificate = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  width: 94vw;
  height: 13vh;
  border-radius: 10px;
  margin: 10px auto;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  & > div > div {
    display: flex;
    justify-content: space-between;
    margin: 0 5%;
    > img {
      height: 50%;
      width: 12%;
      align-self: center;
    }
  }
  & > div > p,
  h3 {
    margin: 2% 5%;
  }
  & > div > h3 {
    font-size: 16px;
    line-height: 135%;
    font-weight: 600;
    width: 40vw;
  }

  & > div > p {
    color: #c97c36;
    font-size: 12px;
    line-height: 135%;
  }
  & > div > p:first-child {
    align-self: flex-end;
  }
`;
const Certificate = props => {
  return (
    <StyledCertificate>
      <img src={props.courseImg} alt={props.courseAlt} />
      <div>
        <p>{props.courseLength}</p>
        <h3>{props.courseTitle}</h3>
        <div>
          <p>{props.courseCreator}</p>
          <img src="images/search.png" alt="checkbox" />
        </div>
      </div>
    </StyledCertificate>
  );
};

export default Certificate;
