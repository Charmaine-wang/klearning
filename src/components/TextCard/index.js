import React from "react";
import styled from "styled-components";

const StyledTextCard = styled.div`
  margin: 0px 0px;
  padding: 16px;
  display:flex;
  background-color: var(--card-color);
  min-height: 70vh;
  margin-bottom: 20px;
  

  .text-card > h1{
    margin:16px 0px;

  }
  .text-card > p{
    line-height: 1.7em;
    margin-bottom:16px;
  }

  .top-div > p:first-of-type{
    color: var(--soft-orange);
  }

  .top-div{
    width:100%;
    display:flex;
    justify-content:space-between;
  }


  // margin: 0;
  // height: ${props => props.height};
  // width: 100%;
  // height: 100vh;
  // box-sizing: border-box;
  // /* padding: 0 15px 0 0; */
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // background-color: #ffffff;

  // & > .massatext {
  //   height: 80vh;
  //   overflow-y: scroll;
  //   padding: 10% 0 0 3vw;
  // }
  // & > div:first-child > p {
  //   height: 400px;
  //   /* background-color: red; */
  // }
  // & .button-div {
  //   align-self: center;
  //   display: flex;
  //   width: 100%;
  //   height: 45px;
  //   align-items: space-between;
  //   padding: 0 3vw;

  //   justify-content: space-between;
  //   /* margin: 4% 0 0 0; */
  // }
`;

const TextCard = ({
  header,
  intro,
  paragraph,
  paragraph2,
  pdf,
  pageCurrent,
  pageAmount
}) => {
  return (
    <StyledTextCard>
      <div className="text-card">
        <div className="top-div">
          <p>{pdf}</p>
          <p>
            {pageCurrent}/{pageAmount}
          </p>
        </div>
        <h1>{header}</h1>
        <p>{intro}</p>
        <p>{paragraph}</p>
        <p>{paragraph2}</p>
      </div>
    </StyledTextCard>
  );
};

export default TextCard;
