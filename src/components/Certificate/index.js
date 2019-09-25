import React from "react";
import styled from "styled-components";

const StyledCertificate = styled.div`
  display: flex;
  flex-direction: row;
  background-color: var(--card-color);
  width: 100%;
  height: 13vh;
  border-radius: 10px;
  margin: 10px auto;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;
    margin-bottom: 10px;

    & > p {
      align-self: flex-end;
      color: var(--soft-orange);
    }

    & > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      p {
        color: var(--dark-grey);
        font-size: 12px;
      }
    }

    h2 {
      font-size: 16px;
      font-weight: 600;
      max-width: 70%;
    }
  }
  img {
    height: 100%;
    width: auto;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }
  .icon {
    width: 20px;
    height: 20px;
  }
`;
const Certificate = ({
  courseImg,
  courseAlt,
  courseLength,
  courseTitle,
  courseCreator
}) => {
  return (
    <StyledCertificate>
      <img src={courseImg} alt={courseAlt} />
      <div>
        <p>{courseLength}</p>
        <h2>{courseTitle}</h2>
        <div>
          <p>{courseCreator}</p>
        </div>
      </div>
    </StyledCertificate>
  );
};

export default Certificate;
