import React from "react";
import styled from "styled-components";

const StyledTextCard = styled.div`
  margin: 0;
  height: ${props => props.height};
  width: 100%;
  height: 78vh;
  box-sizing: border-box;
  padding: 0 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  & > .text-card {
    height: 80vh;
    overflow-y: scroll;
    scroll: orange;
    padding: 10% 0 0 3%;
  }
  & > div > p {
    height: 40%;
    line-height: 165%;
    /* background-color: red; */
  }
  & .button-div {
  }
`;

const TextCard = ({
  header,
  intro,
  paragraph,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  pdf,
  pageCurrent,
  pageAmount,
  date
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
        <div>
          <h1>{date}</h1>
          <p>{paragraph3}</p>
          <p>{paragraph4}</p>
          <p>{paragraph5}</p>
        </div>
      </div>
    </StyledTextCard>
  );
};

export default TextCard;
