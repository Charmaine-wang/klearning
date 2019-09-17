import React from 'react'
import styled from 'styled-components'
    const StyledImgText = styled.div`
      
        position: relative;
        height: 400px;
        top: 0;
        background-image: url(${props => props.imgTextPic});

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
          color: #ffffff;
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
      
    `;

const ImgText = (props) => {
    return (
        <StyledImgText {...props}>

        <div className="overlayer"></div>

        <h1>{props.imgTextHeader}</h1>
        <p>
          {props.imgTextParagraph}
        </p>

        </StyledImgText>
    )
}

export default ImgText
