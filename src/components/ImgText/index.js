import React from "react";
import styled from "styled-components";

const StyledImgText = styled.div`
  position: relative;
  height: ${props => (props.imgHeight ? props.imgHeight : "400px")};
  top: 0;
  margin: ${props => props.imgMargin};
  background-image: url(${props =>
    props.imgTextPic ? props.imgTextPic : "images/home.png"});

  /* background-image: url("images/home.png"); */
  & > .overlayer {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 13.29%,
      rgba(0, 0, 0, 0.8) 100%
    );
    position: absolute;
  }

  & > h1,
  p {
    position: absolute;
    color: var(--card-color);
    z-index: 2;
    text-align: center;
  }
  & > h1 {
    top: 40%;
    font-size: 40px;
  }
  & > p {
    top: 70%;
  }

  @media screen and (max-width: 1500px) and (min-width: 600px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 60vh;
    top: 0;

    /* align-items: center; */

    & > h1 {
      font-size: 40px;
    }
    & > p {
      font-size: 40px;
      line-height: 100%;
      width: 70%;
    }
  }
`;

const ImgText = ({
  imgTextPic,
  imgTextHeader,
  imgTextParagraph,
  imgHeight,
  imgMargin
}) => {
  return (
    <StyledImgText
      imgTextPic={imgTextPic}
      imgHeight={imgHeight}
      imgMargin={imgMargin}
    >
      <div className="overlayer" />

      <h1>{imgTextHeader}</h1>
      <p>{imgTextParagraph}</p>
    </StyledImgText>
  );
};

export default ImgText;
