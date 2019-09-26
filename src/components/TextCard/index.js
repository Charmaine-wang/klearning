import React from "react";
import styled from "styled-components";

const StyledTextCard = styled.div`
  .basic-styling-read {
    margin: 0px 0px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    background-color: var(--card-color);
  }

  .text-card > h1 {
    margin: 16px 0px;
  }
  .text-card > p {
    line-height: 1.7em;
    margin-bottom: 16px;
  }
  .top-div > p:first-of-type {
    color: var(--soft-orange);
  }
  .top-div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .second-part > p {
    line-height: 1.7em;
    margin-bottom: 16px;
  }
  .important-dates {
    margin: 16px 0px;
  }
  .read-date {
    line-height: 1.7em;
    margin-bottom: 16px;
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
  header2
}) => {
  return (
    <StyledTextCard>
      <div className="basic-styling-read">
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
        <div calssName="second-part">
          <h1 className="important-dates">{header2}</h1>
          <p className="read-date">{paragraph3}</p>
          <p className="read-date">{paragraph4}</p>
          <p className="read-date">{paragraph5}</p>
        </div>
      </div>
    </StyledTextCard>
  );
};

export default TextCard;
